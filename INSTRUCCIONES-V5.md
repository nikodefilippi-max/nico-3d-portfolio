# Nico — Photography / V5

Esta versión corrige el problema de fotos grises y mantiene el diseño minimalista.

## IMPORTANTE: estructura de fotos

Tus fotos deben estar exactamente aquí:

D:\nico-3d-portfolio\public\photos\shows\

Y deben llamarse exactamente:

01.webp
02.webp
03.webp
04.webp
05.webp
06.webp
07.webp
08.webp
09.webp
10.webp
11.webp

No hace falta renombrarlas.

Las carpetas siguientes pueden quedar vacías:

D:\nico-3d-portfolio\public\photos\comidas\
D:\nico-3d-portfolio\public\photos\retratos\

## 1. HACER COPIA DE SEGURIDAD

Con el Explorador de archivos de Windows:

1. Buscá `D:\nico-3d-portfolio`.
2. Copiá la carpeta completa.
3. Pegala, por ejemplo, como `D:\nico-3d-portfolio-backup`.

No borres la copia original hasta comprobar que todo funciona.

## 2. COMPROBAR LAS FOTOS CON EL EXPLORADOR

Abrí:

`D:\nico-3d-portfolio\public\photos\shows`

Deberías ver:

- 01.webp
- 02.webp
- ...
- 11.webp

Si están ahí, NO muevas ni renombres nada.

## 3. ABRIR EL PROYECTO EN CURSOR

Abrí Cursor → File → Open Folder.

Seleccioná:

`D:\nico-3d-portfolio`

No abras solamente `src` ni solamente `public`.

## 4. REEMPLAZAR Gallery.jsx

En Cursor abrí:

`src/components/Gallery.jsx`

Seleccioná TODO el contenido y reemplazalo por el `Gallery.jsx` de este paquete V5.

Guardá con:

Ctrl + S

Esta versión usa una sola superficie Three.js con `DoubleSide` y una ruta de assets compatible con Vite/Cloudflare. Esto elimina la implementación anterior de dos planos que estaba dando problemas visuales.

## 5. REEMPLAZAR App.jsx

En Cursor abrí:

`src/App.jsx`

Seleccioná TODO y reemplazalo por el `App.jsx` de V5.

Guardá con Ctrl + S.

El menú queda arriba y horizontal:

TODAS   SHOWS   COMIDAS   RETRATOS

La galería abre inicialmente en SHOWS.

## 6. REEMPLAZAR photos.js

En Cursor abrí:

`src/data/photos.js`

Seleccioná TODO y reemplazalo por el `photos.js` de V5.

No escribas las rutas a mano.

V5 ya genera automáticamente:

`/photos/shows/01.webp`
`/photos/shows/02.webp`
...
`/photos/shows/11.webp`

## 7. CSS

En Cursor abrí:

`src/styles.css`

NO borres el CSS que ya tenés.

Andá hasta el FINAL del archivo y pegá TODO el contenido de:

`styles-v5-additions.css`

Guardá con Ctrl + S.

## 8. PROBAR LOCALMENTE

En Cursor:

Terminal → New Terminal

Ejecutá:

```powershell
cd D:\nico-3d-portfolio
npm run dev
```

Abrí la dirección que te indique Vite, normalmente:

`http://localhost:5173`

## 9. PRUEBA MUY IMPORTANTE DE LAS FOTOS

Antes de mirar la galería, abrí directamente en el navegador:

`http://localhost:5173/photos/shows/01.webp`

### Si aparece la foto
Perfecto. La ruta de la imagen funciona y la galería debería poder cargarla.

Probá también:

`http://localhost:5173/photos/shows/02.webp`

### Si aparece 404 / Not Found
No cambies código todavía.

Eso significa que la foto NO está siendo encontrada por Vite.

Volvé al Explorador y verificá que la ruta sea exactamente:

`D:\nico-3d-portfolio\public\photos\shows\01.webp`

No debe ser:

`D:\nico-3d-portfolio\public\photos\show\01.webp`

ni:

`D:\nico-3d-portfolio\public\photos\shows\01.WEBP`

ni estar dentro de otra carpeta.

## 10. SI LAS FOTOS APARECEN EN LA URL DIRECTA PERO NO EN LA GALERÍA

Abrí F12 → Console.

No cambies nada todavía.

Si aparece un error que comienza con:

`[Gallery] No se pudo cargar:`

copiá esa línea completa.

La ruta que aparece después de los dos puntos nos indica exactamente qué archivo está buscando el navegador.

## 11. PROBAR LAS INTERACCIONES

Con SHOWS seleccionado:

- arrastrá lentamente con el mouse;
- soltá y observá la inercia;
- probá la rueda del mouse;
- hacé click sobre una foto;
- verificá que se abra el modal;
- probá anterior/siguiente;
- presioná Escape.

En celular:

- arrastrá con un dedo;
- el movimiento debe sentirse suave, no rígido;
- tocá una foto para abrirla.

## 12. PROBAR LAS CATEGORÍAS VACÍAS

Tocá COMIDAS.

La navegación debe cambiar correctamente aunque todavía no haya fotos.

Después tocá RETRATOS.

Cuando vuelvas a SHOWS, las 11 fotos deben volver a aparecer.

## 13. BUILD FINAL

Solo cuando todo funcione:

```powershell
cd D:\nico-3d-portfolio
npm run build
```

Debe terminar sin errores.

## 14. IMPORTANTE SOBRE GITHUB/CLOUDFLARE

No subas nada todavía si `npm run build` falla.

Primero necesitamos que localmente:

1. se vean las fotos;
2. funcione el drag;
3. funcione el modal;
4. funcionen las categorías;
5. `npm run build` termine correctamente.

Después:

```powershell
git add .
git commit -m "Corrige galeria 3D y rutas de fotografias"
git push
```

Cloudflare podrá reconstruir el sitio desde GitHub.

## 15. PARA AGREGAR UNA FOTO NUEVA A SHOWS

Con el Explorador:

`D:\nico-3d-portfolio\public\photos\shows\12.webp`

Después, en `src/data/photos.js`, habrá que agregar el objeto correspondiente.

No es necesario modificar Gallery.jsx.

## 16. PARA COMIDAS Y RETRATOS MÁS ADELANTE

Explorador:

`D:\nico-3d-portfolio\public\photos\comidas`

`D:\nico-3d-portfolio\public\photos\retratos`

Cuando agregues fotos allí, se incorporan a `photos.js` y las categorías ya están preparadas.
