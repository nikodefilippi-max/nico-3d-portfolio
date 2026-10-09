import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

const assetPath = (src) => {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${String(src || "").replace(/^\/+/, "")}`;
};

export default function Gallery({ photos = [], onSelect }) {
  const mountRef = useRef(null);
  const selectRef = useRef(onSelect);

  useEffect(() => {
    selectRef.current = onSelect;
  }, [onSelect]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    // Limpiamos cualquier canvas anterior antes de crear el nuevo.
    mount.replaceChildren();

    if (!photos.length) return undefined;

    let destroyed = false;
    let raf = 0;
    let resizeObserver;
    let cleanup = () => {};

    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
      camera.position.set(0, 0.15, 9.2);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
      renderer.setClearColor(0x000000, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.domElement.className = "gallery-canvas";
      renderer.domElement.setAttribute("aria-label", "Galería fotográfica 3D");
      mount.appendChild(renderer.domElement);

      const group = new THREE.Group();
      scene.add(group);

      const loader = new THREE.TextureLoader();
      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();
      const items = [];
      const textures = [];

      const isMobile = () => window.innerWidth < 700;
      const radius = () => (isMobile() ? 3.55 : 4.05);
      const maxWidth = () => (isMobile() ? 1.28 : 1.62);
      const maxHeight = () => (isMobile() ? 1.78 : 2.16);

      photos.forEach((photo, index) => {
        const angle = (index / photos.length) * Math.PI * 2;
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          side: THREE.DoubleSide,
          transparent: false,
          toneMapped: false,
        });
        const mesh = new THREE.Mesh(geometry, material);

        mesh.userData.index = index;
        mesh.userData.photo = photo;
        mesh.position.set(
          Math.sin(angle) * radius(),
          0,
          Math.cos(angle) * radius()
        );

        // El frente mira hacia afuera, es decir, hacia el espectador.
        // DoubleSide mantiene la misma foto visible también desde atrás.
        mesh.rotation.y = angle;
        mesh.scale.set(0.001, 0.001, 1);
        group.add(mesh);
        items.push(mesh);

        const url = assetPath(photo.src);
        loader.load(
          url,
          (texture) => {
            if (destroyed) {
              texture.dispose();
              return;
            }

            texture.colorSpace = THREE.SRGBColorSpace;
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.generateMipmaps = true;

            material.map = texture;
            material.needsUpdate = true;
            textures.push(texture);

            const image = texture.image;
            const imageWidth = image?.naturalWidth || image?.width || 1;
            const imageHeight = image?.naturalHeight || image?.height || 1;
            const aspect = imageWidth / imageHeight || 1;

            let height = Math.min(maxHeight(), maxWidth() / aspect);
            let width = height * aspect;

            if (width > maxWidth()) {
              width = maxWidth();
              height = width / aspect;
            }

            mesh.scale.set(width, height, 1);
          },
          undefined,
          (error) => {
            console.error(`[Gallery] No se pudo cargar la foto: ${url}`, error);
          }
        );
      });

      group.rotation.x = -0.025;

      const resize = () => {
        const width = Math.max(mount.clientWidth, 1);
        const height = Math.max(mount.clientHeight, 1);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      };

      resize();
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(mount);

      let dragging = false;
      let moved = false;
      let lastX = 0;
      let lastY = 0;
      let velocity = 0;
      let pointerDownTime = 0;
      let lastInteraction = performance.now();
      const clock = new THREE.Clock();

      const setPointer = (event) => {
        const rect = renderer.domElement.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      };

      const down = (event) => {
        dragging = true;
        moved = false;
        pointerDownTime = performance.now();
        lastX = event.clientX;
        lastY = event.clientY;
        velocity = 0;
        lastInteraction = performance.now();
        renderer.domElement.style.cursor = "grabbing";
        renderer.domElement.setPointerCapture?.(event.pointerId);
      };

      const move = (event) => {
        if (!dragging) return;

        const dx = event.clientX - lastX;
        const dy = event.clientY - lastY;
        if (Math.abs(dx) + Math.abs(dy) > 3) moved = true;

        const movement = dx * 0.00155;
        velocity = THREE.MathUtils.lerp(velocity, movement, 0.18);
        group.rotation.y += movement;
        group.rotation.x = THREE.MathUtils.clamp(
          group.rotation.x + dy * 0.00032,
          -0.16,
          0.16
        );

        lastX = event.clientX;
        lastY = event.clientY;
        lastInteraction = performance.now();
      };

      const up = (event) => {
        dragging = false;
        renderer.domElement.style.cursor = "grab";
        renderer.domElement.releasePointerCapture?.(event.pointerId);
        velocity = THREE.MathUtils.clamp(velocity, -0.006, 0.006);
      };

      const wheel = (event) => {
        event.preventDefault();
        const delta = THREE.MathUtils.clamp(event.deltaY, -35, 35);
        group.rotation.y += delta * 0.00045;
        velocity = 0;
        lastInteraction = performance.now();
      };

      const click = (event) => {
        if (moved || performance.now() - pointerDownTime > 450) return;

        setPointer(event);
        raycaster.setFromCamera(pointer, camera);
        const hits = raycaster.intersectObjects(items, false);
        const hit = hits[0];
        if (!hit?.object?.userData?.photo) return;

        selectRef.current?.(hit.object.userData.index);
      };

      renderer.domElement.addEventListener("pointerdown", down);
      renderer.domElement.addEventListener("pointermove", move);
      renderer.domElement.addEventListener("pointerup", up);
      renderer.domElement.addEventListener("pointercancel", up);
      renderer.domElement.addEventListener("click", click);
      renderer.domElement.addEventListener("wheel", wheel, { passive: false });

      const animate = () => {
        if (destroyed) return;
        raf = requestAnimationFrame(animate);

        const delta = Math.min(clock.getDelta(), 0.033);
        const idle = performance.now() - lastInteraction > 5200;

        if (!dragging) {
          velocity *= Math.pow(0.82, delta * 60);
          group.rotation.y += velocity;
          if (idle) group.rotation.y += delta * 0.022;
        }

        group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, -0.025, 0.04);
        renderer.render(scene, camera);
      };

      gsap.to(group.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 1.15,
        ease: "power3.out",
      });

      animate();

      cleanup = () => {
        destroyed = true;
        cancelAnimationFrame(raf);
        resizeObserver?.disconnect();

        renderer.domElement.removeEventListener("pointerdown", down);
        renderer.domElement.removeEventListener("pointermove", move);
        renderer.domElement.removeEventListener("pointerup", up);
        renderer.domElement.removeEventListener("pointercancel", up);
        renderer.domElement.removeEventListener("click", click);
        renderer.domElement.removeEventListener("wheel", wheel);

        gsap.killTweensOf(group.scale);

        items.forEach((mesh) => {
          mesh.geometry.dispose();
          mesh.material.dispose();
        });

        textures.forEach((texture) => texture.dispose());
        renderer.dispose();
        renderer.domElement.remove();
      };
    } catch (error) {
      console.error("[Gallery] Error al iniciar Three.js:", error);
      mount.innerHTML =
        '<div class="gallery-error">No se pudo iniciar la galería 3D. Revisá la consola del navegador.</div>';
    }

    return () => cleanup();
  }, [photos]);

  return (
    <main className="gallery-shell" aria-label="Galería fotográfica 3D">
      <div className="gallery" ref={mountRef} />
      <div className="gallery-hint" aria-hidden="true">
        <span>ARRASTRÁ PARA EXPLORAR</span>
        <span>·</span>
        <span>CLICK PARA VER</span>
      </div>
    </main>
  );
}
