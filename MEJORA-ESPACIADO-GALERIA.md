# Nico — Photography: ajuste de separación Cover Flow

## Qué cambia
- Se aumenta la separación horizontal entre tarjetas para que exista un pequeño espacio visible entre las fotografías.
- Escritorio: `2.05` unidades Three.js.
- Móvil: `1.52` unidades Three.js.
- Se conserva el orden de verticales primero y horizontales después, las texturas de ambas caras, el canto oscuro, el fondo y el resto de los componentes.

## Instalación
1. Cerrá Vite con `Ctrl+C`.
2. Hacé una copia de `D:\nico-3d-portfolio`.
3. Descomprimí el ZIP y copiá el contenido de la carpeta `nico-3d-portfolio` dentro de tu proyecto, aceptando reemplazar archivos.
4. En la terminal de Cursor ejecutá:

```powershell
cd D:\nico-3d-portfolio
npm install
npm run build
npm run dev
```

5. Abrí la dirección que indique Vite y probá el movimiento en escritorio y móvil.

## Ajuste fino manual (solo si hiciera falta)
Archivo: `src/lib/radialGallery.js`

Buscá:

```js
const spacing = () => isMobile() ? 1.52 : 2.05;
```

- Si todavía se tocan: subí los valores de a `0.05` (por ejemplo `1.57` y `2.10`).
- Si quedan demasiado separadas: bajalos de a `0.05`.
- El primer valor es móvil; el segundo, escritorio.

No cambies a la vez tamaño, rotación y separación: ajustá primero spacing para poder evaluar el resultado.

## Prompt para revisión externa
Adjuntá el ZIP a Claude (recomendado para revisar varios archivos de un proyecto) o a otra IA que permita adjuntar archivos y pegá el contenido de `PROMPT-REVISION-IA.txt`. Pedile que revise antes de cambiar y que no reintroduzca la galería orbital antigua ni cambie rutas de fotos.

## Verificación
El ZIP contiene el proyecto y el ajuste solicitado. La compilación de Vite debe ejecutarse localmente con `npm run build`; no se declara como probada si no se ejecuta en tu computadora.
