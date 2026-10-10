import * as THREE from "three";

export const assetPath = (src) => {
  const value = String(src || "");
  if (/^(https?:)?\/\/|^data:/.test(value)) return value;
  return `${import.meta.env.BASE_URL || "/"}${value.replace(/^\/+/, "")}`;
};

/** Cover Flow horizontal: la tarjeta activa mira al espectador y las vecinas
 * se superponen y giran de perfil, como tapas de discos. */
export function createRadialGallery(mount, { photos = [], onSelect, reducedMotion = false } = {}) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, window.innerWidth < 700 ? 1.25 : 1.6));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const canvas = renderer.domElement;
  canvas.className = "gallery-canvas";
  canvas.setAttribute("aria-label", "Galería fotográfica 3D. Arrastrá para explorar y tocá una foto para ampliarla.");
  canvas.setAttribute("role", "img");
  mount.replaceChildren(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0.05, 9.4);
  const track = new THREE.Group();
  scene.add(track);
  const geometry = new THREE.BoxGeometry(1, 1, 0.035);
  const loader = new THREE.TextureLoader();
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const maxAniso = Math.min(4, renderer.capabilities.getMaxAnisotropy());
  const isMobile = () => window.innerWidth < 700;
  const cardWidth = () => isMobile() ? 2.05 : 2.72;
  const cardHeight = () => isMobile() ? 2.78 : 3.42;
  // Centers closer together create the layered album-cover silhouette.
  const spacing = () => isMobile() ? 0.42 : 0.58;
  const cards = [];
  let current = 0; // rendered position, eased toward target
  let target = 0;  // requested position from pointer/wheel/inertia
  let velocity = 0;
  let dragging = false;
  let pointerId = null;
  let startX = 0, lastX = 0, lastTime = 0, travelled = 0;
  let lastInteraction = performance.now();
  let raf = 0, resizeRaf = 0, destroyed = false, visible = true;
  const clock = new THREE.Clock();

  photos.forEach((photo, index) => {
    // BoxGeometry material order: +X, -X, +Y, -Y, front (+Z), back (-Z).
    // Las caras frontal y trasera comparten la misma textura; los cuatro cantos
    // usan un tono grafito para que el perfil tenga grosor visible al girar.
    const edgeMaterial = new THREE.MeshBasicMaterial({ color: 0x171717, toneMapped: false });
    const frontMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
    const backMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
    const materials = [edgeMaterial, edgeMaterial, edgeMaterial, edgeMaterial, frontMaterial, backMaterial];
    const mesh = new THREE.Mesh(geometry, materials);
    mesh.userData.index = index;
    mesh.userData.photo = photo;
    track.add(mesh);
    const card = {
      mesh,
      materials,
      edgeMaterial,
      frontMaterial,
      backMaterial,
      aspect: (photo.width || 800) / (photo.height || 1000),
      loaded: false,
      texture: null,
    };
    cards.push(card);
    const url = assetPath(photo.thumb || photo.src);
    loader.load(url, (texture) => {
      if (destroyed) { texture.dispose(); return; }
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = maxAniso;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      card.aspect = (texture.image?.naturalWidth || texture.image?.width || 1) / (texture.image?.naturalHeight || texture.image?.height || 1);
      card.texture = texture;
      card.frontMaterial.map = texture;
      card.backMaterial.map = texture;
      card.frontMaterial.needsUpdate = true;
      card.backMaterial.needsUpdate = true;
      card.loaded = true;
    }, undefined, (error) => console.error(`[Gallery] No se pudo cargar: ${url}`, error));
  });

  const fit = () => {
    const width = Math.max(mount.clientWidth, 1), height = Math.max(mount.clientHeight, 1);
    camera.aspect = width / height;
    camera.fov = isMobile() ? 43 : 38;
    camera.position.z = isMobile() ? 8.4 : 9.4;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile() ? 1.25 : 1.6));
    renderer.setSize(width, height, false);
    layoutCards();
  };

  const signedDistance = (index) => {
    const count = cards.length;
    if (count < 2) return index - current;
    let d = index - current;
    d = ((d + count / 2) % count + count) % count - count / 2;
    return d;
  };

  function layoutCards() {
    const maxVisible = isMobile() ? 3.5 : 5.5;
    cards.forEach((card, index) => {
      const d = signedDistance(index);
      const abs = Math.abs(d);
      const visibleFactor = Math.max(0, 1 - abs / maxVisible);
      const h = Math.min(cardHeight(), cardWidth() / Math.max(card.aspect, 0.05));
      const w = h * Math.max(card.aspect, 0.05);
      // Slightly stepped depth and a stronger Y rotation reveal the physical edge.
      card.mesh.position.set(d * spacing(), 0, -Math.min(abs, 6) * 0.14);
      card.mesh.rotation.y = THREE.MathUtils.clamp(-d * 1.22, -1.49, 1.49);
      const scale = abs < 0.01 ? 1.10 : Math.max(0.70, 1 - abs * 0.045);
      card.mesh.scale.set(w * scale, h * scale, 1);
      card.mesh.renderOrder = Math.round(100 - abs * 10);
      card.mesh.visible = visibleFactor > 0;
    });
  }

  const pick = (event) => {
    const rect = canvas.getBoundingClientRect();
    pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    return raycaster.intersectObjects(cards.map((card) => card.mesh), false)[0]?.object || null;
  };

  const down = (event) => {
    if (pointerId !== null) return;
    pointerId = event.pointerId; dragging = true; travelled = 0;
    startX = lastX = event.clientX; lastTime = performance.now(); velocity = 0;
    lastInteraction = lastTime;
    canvas.style.cursor = "grabbing";
    try { canvas.setPointerCapture(event.pointerId); } catch {}
  };
  const move = (event) => {
    if (!dragging || event.pointerId !== pointerId) {
      if (!dragging && event.pointerType === "mouse") canvas.style.cursor = pick(event) ? "pointer" : "grab";
      return;
    }
    const now = performance.now(), dt = Math.max(0.008, (now - lastTime) / 1000);
    const dx = event.clientX - lastX;
    travelled = Math.max(travelled, Math.abs(event.clientX - startX));
    const delta = -dx / (spacing() * 175);
    target += delta;
    velocity = THREE.MathUtils.lerp(velocity, delta / dt, 0.22);
    lastX = event.clientX; lastTime = now; lastInteraction = now;
    layoutCards();
  };
  const up = (event) => {
    if (event.pointerId !== pointerId) return;
    const tap = event.type === "pointerup" && travelled < 8 && performance.now() - lastTime < 450;
    dragging = false; pointerId = null;
    canvas.style.cursor = "grab";
    try { canvas.releasePointerCapture(event.pointerId); } catch {}
    if (event.type === "pointercancel") velocity = 0;
    velocity = THREE.MathUtils.clamp(velocity, -2.5, 2.5);
    if (tap) {
      const hit = pick(event);
      if (hit) {
        const index = hit.userData.index;
        const d = signedDistance(index);
        if (Math.abs(d) > 0.25) { target += d; velocity = 0; }
        else onSelect?.(index);
        layoutCards();
      }
    }
  };
  const wheel = (event) => {
    event.preventDefault();
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    target += THREE.MathUtils.clamp(delta, -60, 60) * 0.005;
    velocity = 0; lastInteraction = performance.now(); layoutCards();
  };
  canvas.addEventListener("pointerdown", down);
  canvas.addEventListener("pointermove", move);
  canvas.addEventListener("pointerup", up);
  canvas.addEventListener("pointercancel", up);
  canvas.addEventListener("wheel", wheel, { passive: false });

  const frame = () => {
    raf = 0;
    if (destroyed || !visible) return;
    const delta = Math.min(clock.getDelta(), 0.04);
    if (!dragging) {
      target += velocity * delta;
      velocity *= Math.exp(-delta * 3.6);
      if (Math.abs(velocity) < 0.003) velocity = 0;
    }
    // Critically damped-feeling easing: the cards catch up smoothly instead of
    // snapping to the pointer or running a second idle orbit animation.
    const easing = reducedMotion ? 1 : 1 - Math.exp(-delta * 13.5);
    current += (target - current) * easing;
    if (Math.abs(target - current) < 0.0005) current = target;
    layoutCards();
    renderer.render(scene, camera);
    raf = requestAnimationFrame(frame);
  };
  const scheduleFrame = () => { if (!raf && visible && !destroyed) raf = requestAnimationFrame(frame); };
  const resizeObserver = new ResizeObserver(() => {
    if (resizeRaf) cancelAnimationFrame(resizeRaf);
    resizeRaf = requestAnimationFrame(() => { resizeRaf = 0; fit(); scheduleFrame(); });
  });
  resizeObserver.observe(mount);
  const intersectionObserver = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) scheduleFrame(); else if (raf) { cancelAnimationFrame(raf); raf = 0; } });
  intersectionObserver.observe(mount);
  fit(); scheduleFrame();

  return {
    destroy() {
      destroyed = true;
      if (raf) cancelAnimationFrame(raf);
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      resizeObserver.disconnect(); intersectionObserver.disconnect();
      canvas.removeEventListener("pointerdown", down);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerup", up);
      canvas.removeEventListener("pointercancel", up);
      canvas.removeEventListener("wheel", wheel);
      cards.forEach(({ mesh, materials, texture }) => {
        track.remove(mesh);
        texture?.dispose();
        materials.forEach((material) => material.dispose());
      });
      geometry.dispose(); renderer.dispose(); renderer.forceContextLoss(); canvas.remove();
    },
  };
}
