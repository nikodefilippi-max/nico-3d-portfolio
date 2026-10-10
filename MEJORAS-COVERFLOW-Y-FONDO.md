# Nico — Photography | Corrección Cover Flow fluido + fondo

## Qué corrige este paquete
- Una sola galería 3D activa: se eliminó el elemento decorativo `gallery-atmosphere` y su CSS radial anterior para que no compita visualmente con el fondo fotográfico.
- El Cover Flow usa una posición objetivo y una posición visual suavizada. El arrastre ya no mueve todas las tarjetas de golpe; se acercan con easing y una inercia más controlada.
- Se eliminó la deriva automática cuando nadie interactúa. La galería queda quieta cuando termina el movimiento.
- Tarjetas laterales más juntas y con un giro de perfil más claro; la activa se mantiene frontal.
- El fondo es más oscuro (overlay 0.56), con saturación un poco reducida y un escalado muy leve para que se perciba detrás de la galería.
- Se quitó `src/styles/gallery-additions.css`, que era un archivo de ejemplo no importado y podía generar confusión sobre qué CSS era el definitivo.

## Instalación segura en Windows
1. Cerrá el servidor Vite con `Ctrl+C` en la terminal.
2. Copiá `D:\nico-3d-portfolio` como `D:\nico-3d-portfolio-backup`.
3. Extraé este ZIP en una carpeta temporal.
4. Copiá el contenido de la carpeta `nico-3d-portfolio` extraída dentro de `D:\nico-3d-portfolio` y aceptá reemplazar archivos. No borres ni reemplaces `.git`, `node_modules` ni `dist` si Windows te pregunta por ellos; el ZIP no incluye esas carpetas.
5. En Cursor, terminal:

```powershell
cd D:\nico-3d-portfolio
npm install
npm run build
npm run dev
```

6. Abrí la URL local que muestre Vite. Normalmente `http://localhost:5173/`.

## Fondo fotográfico
La ruta sigue siendo `public/images/gallery-background.jpg`. Copiá tu archivo ahí con ese nombre. La capa oscura se regula en `src/styles.css` mediante `--gallery-background-overlay: 0.56;`.
- 0.50 = un poco más clara.
- 0.56 = recomendación actual.
- 0.62 = bastante más oscura.

La foto queda detrás de la galería; no se cambia la textura ni el encuadre de las fotos orbitales.

## Prueba breve
- Arrastrá lento y rápido, soltá y observá que la inercia se desacelere suavemente.
- Tocá una tarjeta lateral: debe deslizarse al frente.
- Tocá la tarjeta frontal: debe abrir el modal.
- Cambiá categorías y probá el modal y contacto.
- Revisá en DevTools (F12 > Console) si hay errores de carga o WebGL.

## Reversión
Si algo falla, cerrá Vite y recuperá los archivos de `nico-3d-portfolio-backup`. No publiques hasta que `npm run build` termine sin errores.

## Validación
El código fue editado sobre el ZIP compartido. No afirmo que el build haya sido ejecutado exitosamente en tu computadora; ejecutá `npm run build` antes de publicar.
