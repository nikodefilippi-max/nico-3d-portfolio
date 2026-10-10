NICO — PHOTOGRAPHY | AJUSTE DE COVER FLOW Y PERFIL DE TARJETAS

QUÉ CAMBIÓ
1. Orden del catálogo de Shows: primero las seis fotos verticales (02, 05, 06, 10, 11, 14), luego las horizontales (01, 03, 04, 07, 08, 09, 12, 13, 15, 16). Se usaron las dimensiones de las miniaturas reales para que la galería conozca la proporción antes de terminar de cargar las texturas.
2. Tarjetas con grosor real: se cambió la geometría plana por una caja muy fina. El frente y el reverso usan la misma foto; los cuatro cantos tienen un acabado grafito, visible cuando la tarjeta gira de perfil.
3. Cover Flow más compacto: se redujo la distancia entre centros y se aumentó la rotación lateral para que las tarjetas se superpongan y el canto aparezca con claridad.

INSTALACIÓN SEGURA
1. Cerrá Vite con Ctrl+C.
2. Hacé una copia de seguridad de la carpeta actual.
3. Descomprimí este ZIP.
4. Copiá el contenido de la carpeta nico-3d-portfolio sobre D:\nico-3d-portfolio y aceptá reemplazar archivos. No borres la copia de seguridad.
5. En la terminal:
   cd D:\nico-3d-portfolio
   npm install
   npm run build
   npm run dev
6. Abrí la URL local que indique Vite y probá arrastre, clic, modal, categorías y pantalla móvil.

ARCHIVOS PRINCIPALES MODIFICADOS
- src/data/photos.js
- src/lib/radialGallery.js

FONDO
Se conserva la ruta public/images/gallery-background.jpg y la configuración de oscuridad existente en src/styles.css.

AGREGAR FOTOS EN EL FUTURO
En src/data/photos.js, agregá cada foto a photoSpecs con su número y dimensiones reales. Poné primero las verticales (height > width) y después las horizontales (width >= height). Conservá los nombres/rutas que existan en public/photos/Shows y public/photos/thumb.

VALIDACIÓN
El código se preparó sobre el proyecto entregado. En este entorno no se pudo confirmar una compilación Vite porque la instalación de dependencias agotó el tiempo de ejecución. Ejecutá npm run build localmente antes de publicar. Si falla, conservá el texto completo del error y restaurá la copia de seguridad si fuera necesario.
