import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

function getLayout(width, height) {
  const isMobile = width < 700;
  const aspect = width / Math.max(height, 1);

  return {
    isMobile,
    radius: isMobile ? 3.15 : aspect < 1.15 ? 4.15 : 4.5,
    maxPhotoW: isMobile ? 1.78 : 2.12,
    maxPhotoH: isMobile ? 2.28 : 2.62,
    cameraZ: isMobile ? 5.85 : 6.35,
    cameraY: isMobile ? 0.06 : 0.18,
    fov: isMobile ? 50 : 43,
    tilt: isMobile ? -0.035 : -0.075,
    pixelRatio: Math.min(window.devicePixelRatio || 1, isMobile ? 1.75 : 2),
    dragGain: isMobile ? 2.35 : 1.7,
    clickSlop: isMobile ? 12 : 7
  };
}

function fitPhotoScale(imageWidth, imageHeight, maxW, maxH) {
  const photoAspect = imageWidth / Math.max(imageHeight, 1);
  const frameAspect = maxW / maxH;

  if (photoAspect > frameAspect) {
    return { x: maxW, y: maxW / photoAspect };
  }

  return { x: maxH * photoAspect, y: maxH };
}

function shortestAngle(from, to) {
  return Math.atan2(Math.sin(to - from), Math.cos(to - from));
}

export default function Gallery({ photos, onSelect }) {
  const mountRef = useRef(null);
  const selectedCallbackRef = useRef(onSelect);

  useEffect(() => {
    selectedCallbackRef.current = onSelect;
  }, [onSelect]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !photos.length) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let layout = getLayout(
      mount.clientWidth || window.innerWidth,
      mount.clientHeight || window.innerHeight
    );

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, layout.cameraZ - 1.4, layout.cameraZ + 7.2);

    const camera = new THREE.PerspectiveCamera(layout.fov, 1, 0.1, 80);
    camera.position.set(0, layout.cameraY, layout.cameraZ);
    camera.lookAt(0, 0.04, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: !layout.isMobile,
      alpha: true,
      powerPreference: "high-performance"
    });

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(layout.pixelRatio);
    mount.appendChild(renderer.domElement);

    const gallery = new THREE.Group();
    gallery.rotation.x = layout.tilt;
    scene.add(gallery);

    const textureLoader = new THREE.TextureLoader();
    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
    const geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
    const items = [];
    const focusScale = new THREE.Vector3();
    const focusColor = new THREE.Color();

    photos.forEach((photo, index) => {
      const angle = (index / photos.length) * Math.PI * 2;
      const defaultScale = fitPhotoScale(3, 4, layout.maxPhotoW, layout.maxPhotoH);

      const material = new THREE.MeshBasicMaterial({
        color: 0x111111,
        side: THREE.FrontSide,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        toneMapped: false,
        fog: true
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        Math.sin(angle) * layout.radius,
        0,
        Math.cos(angle) * layout.radius
      );
      mesh.lookAt(0, 0, 0);
      mesh.rotateY(Math.PI);
      mesh.scale.set(defaultScale.x, defaultScale.y, 1);

      mesh.userData = {
        index,
        photo,
        angle,
        baseScale: defaultScale,
        focus: 0
      };

      const texture = textureLoader.load(
        photo.src,
        (loaded) => {
          loaded.colorSpace = THREE.SRGBColorSpace;
          loaded.minFilter = THREE.LinearMipmapLinearFilter;
          loaded.magFilter = THREE.LinearFilter;
          loaded.generateMipmaps = true;
          loaded.anisotropy = Math.min(8, maxAnisotropy);

          const image = loaded.image;
          if (image?.width && image?.height) {
            mesh.userData.baseScale = fitPhotoScale(
              image.width,
              image.height,
              layout.maxPhotoW,
              layout.maxPhotoH
            );
          }

          material.map = loaded;
          material.color.setHex(0xffffff);
          material.needsUpdate = true;
        }
      );

      texture.colorSpace = THREE.SRGBColorSpace;

      gallery.add(mesh);
      items.push(mesh);
    });

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    let isDragging = false;
    let moved = false;
    let startX = 0;
    let lastX = 0;
    let velocity = 0;
    let targetRotation = 0;
    let pointerDownTime = 0;

    const placeItems = () => {
      items.forEach((mesh) => {
        const { angle } = mesh.userData;
        const currentLayout = layout;
        const fitted = mesh.material.map?.image?.width
          ? fitPhotoScale(
              mesh.material.map.image.width,
              mesh.material.map.image.height,
              currentLayout.maxPhotoW,
              currentLayout.maxPhotoH
            )
          : fitPhotoScale(3, 4, currentLayout.maxPhotoW, currentLayout.maxPhotoH);

        mesh.userData.baseScale = fitted;
        mesh.position.set(
          Math.sin(angle) * currentLayout.radius,
          mesh.position.y,
          Math.cos(angle) * currentLayout.radius
        );
        mesh.lookAt(0, 0, 0);
        mesh.rotateY(Math.PI);
        mesh.scale.set(fitted.x, fitted.y, 1);
      });
    };

    const nearestFrontRotation = () => {
      let best = targetRotation;
      let bestDelta = Infinity;

      items.forEach((mesh) => {
        const delta = shortestAngle(targetRotation, -mesh.userData.angle);
        if (Math.abs(delta) < Math.abs(bestDelta)) {
          bestDelta = delta;
          best = targetRotation + delta;
        }
      });

      return best;
    };

    const setPointer = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const pickPhoto = (event) => {
      setPointer(event);
      raycaster.setFromCamera(pointer, camera);

      const hits = raycaster.intersectObjects(items, false);
      if (!hits.length) return;

      selectedCallbackRef.current(hits[0].object.userData.index);
    };

    const onPointerDown = (event) => {
      isDragging = true;
      moved = false;
      startX = lastX = event.clientX;
      pointerDownTime = performance.now();
      velocity = 0;
      renderer.domElement.setPointerCapture?.(event.pointerId);
    };

    const onPointerMove = (event) => {
      if (!isDragging) return;

      const dx = event.clientX - lastX;
      const width = Math.max(renderer.domElement.clientWidth, 1);
      const rotationDelta = (dx / width) * Math.PI * layout.dragGain;

      if (Math.abs(event.clientX - startX) > layout.clickSlop) {
        moved = true;
      }

      targetRotation += rotationDelta;
      velocity = rotationDelta;
      lastX = event.clientX;
    };

    const onPointerUp = (event) => {
      if (!isDragging) return;
      isDragging = false;

      renderer.domElement.releasePointerCapture?.(event.pointerId);

      const duration = performance.now() - pointerDownTime;
      if (!moved && duration < 520) {
        pickPhoto(event);
        return;
      }

      if (Math.abs(velocity) < 0.014) {
        targetRotation = nearestFrontRotation();
        velocity = 0;
      }
    };

    const onWheel = (event) => {
      event.preventDefault();
      const dy = THREE.MathUtils.clamp(event.deltaY, -90, 90);
      const step = dy * 0.0022;
      targetRotation += step;
      velocity += step * 4;
    };

    const onResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;

      layout = getLayout(width, height);

      camera.fov = layout.fov;
      camera.aspect = width / Math.max(height, 1);
      camera.position.set(0, layout.cameraY, layout.cameraZ);
      camera.lookAt(0, 0.04, 0);
      camera.updateProjectionMatrix();

      gallery.rotation.x = layout.tilt;
      scene.fog.near = layout.cameraZ - 1.4;
      scene.fog.far = layout.cameraZ + 7.2;

      renderer.setPixelRatio(layout.pixelRatio);
      renderer.setSize(width, height, false);

      placeItems();
    };

    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    renderer.domElement.addEventListener("pointermove", onPointerMove);
    renderer.domElement.addEventListener("pointerup", onPointerUp);
    renderer.domElement.addEventListener("pointercancel", onPointerUp);
    renderer.domElement.addEventListener("wheel", onWheel, { passive: false });

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(mount);
    onResize();

    const clock = new THREE.Clock();
    let animationFrame = 0;

    const animate = () => {
      const delta = Math.min(clock.getDelta(), 0.05);
      const damping = Math.pow(0.93, delta * 60);
      const follow = 1 - Math.pow(0.0009, delta * 60);
      let maxFocus = 0;

      if (!isDragging) {
        velocity *= damping;

        items.forEach((mesh) => {
          const facing = Math.cos(mesh.userData.angle + gallery.rotation.y);
          maxFocus = Math.max(maxFocus, Math.max(0, facing));
        });

        if (!reduceMotion) {
          const dwell = Math.pow(maxFocus, 3.2);
          const auto = 0.00105 * (1 - dwell * 0.9);
          if (Math.abs(velocity) < 0.0035) {
            velocity += auto;
          }
        }

        if (Math.abs(velocity) < 0.00002) velocity = 0;
        targetRotation += velocity;
      }

      gallery.rotation.y += (targetRotation - gallery.rotation.y) * follow;

      items.forEach((mesh) => {
        const facing = Math.cos(mesh.userData.angle + gallery.rotation.y);
        const focus = Math.pow(THREE.MathUtils.clamp(facing, 0, 1), 1.55);
        mesh.userData.focus = focus;

        const { baseScale } = mesh.userData;
        const presence = 1 + focus * (layout.isMobile ? 0.22 : 0.32);

        focusScale.set(baseScale.x * presence, baseScale.y * presence, 1);
        mesh.scale.lerp(focusScale, follow);

        mesh.position.y = THREE.MathUtils.lerp(
          mesh.position.y,
          focus * (layout.isMobile ? 0.12 : 0.2),
          follow
        );

        mesh.material.opacity = THREE.MathUtils.lerp(
          mesh.material.opacity,
          0.22 + focus * 0.78,
          follow
        );

        const luminance = 0.42 + focus * 0.58;
        mesh.material.color.lerp(focusColor.setScalar(luminance), follow);
      });

      renderer.render(scene, camera);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    let introTween = null;
    if (reduceMotion) {
      gallery.scale.setScalar(1);
    } else {
      gallery.scale.setScalar(0.78);
      introTween = gsap.to(gallery.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 1.55,
        ease: "power3.out"
      });
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      introTween?.kill();
      resizeObserver.disconnect();

      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("pointerup", onPointerUp);
      renderer.domElement.removeEventListener("pointercancel", onPointerUp);
      renderer.domElement.removeEventListener("wheel", onWheel);

      items.forEach((mesh) => {
        mesh.material.map?.dispose();
        mesh.material.dispose();
      });

      geometry.dispose();
      renderer.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [photos]);

  return (
    <main className="gallery-shell">
      <div className="gallery" ref={mountRef} aria-label="Galería fotográfica 3D" />
      <div className="gallery-hint">
        <span>ARRASTRÁ PARA EXPLORAR</span>
      </div>
    </main>
  );
}
