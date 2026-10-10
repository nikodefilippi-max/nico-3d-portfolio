// Catálogo centralizado. Las fotografías verticales aparecen primero y las horizontales después.
// Las dimensiones reales permiten reservar el espacio correcto para cada imagen desde el inicio.
const photoSpecs = [
  { number: 2, width: 678, height: 1024 },
  { number: 5, width: 683, height: 1024 },
  { number: 6, width: 678, height: 1024 },
  { number: 10, width: 684, height: 1024 },
  { number: 11, width: 684, height: 1024 },
  { number: 14, width: 819, height: 1024 },
  { number: 1, width: 1024, height: 683 },
  { number: 3, width: 1024, height: 682 },
  { number: 4, width: 1024, height: 684 },
  { number: 7, width: 1024, height: 689 },
  { number: 8, width: 1024, height: 684 },
  { number: 9, width: 1024, height: 683 },
  { number: 12, width: 1024, height: 684 },
  { number: 13, width: 1024, height: 684 },
  { number: 15, width: 1024, height: 684 },
  { number: 16, width: 1024, height: 684 },
];

const showPhotos = photoSpecs.map(({ number, width, height }) => {
  const id = String(number).padStart(2, "0");
  return {
    id: `shows-${id}`,
    src: `/photos/Shows/${id}.webp`,
    thumb: `/photos/thumb/${id}.webp`,
    width,
    height,
    title: id,
    category: "Shows",
    location: "Brasil",
    year: "2026",
    alt: `Fotografía de show ${id}`,
  };
});

// Para agregar nuevas fotos, sumá sus dimensiones a photoSpecs.
// Mantené primero todas las verticales (height > width) y después las horizontales.
const comidaPhotos = [];
const retratoPhotos = [];

export const photos = [...showPhotos, ...comidaPhotos, ...retratoPhotos];
