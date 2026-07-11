export const properties = [
  {
    id: "casa-nordelta",
    name: "Casa Vidrio y Piedra",
    location: "Nordelta, Buenos Aires",
    price: "USD 1.250.000",
    size: "420 m²",
    rooms: "5 ambientes",
    type: "Casa",
    operation: "Venta",
    year: "2022",
    description:
      "Volúmenes de hormigón visto y piedra local se abren hacia un espejo de agua. Diseñada para que la luz cambie el carácter de cada ambiente a lo largo del día.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "penthouse-recoleta",
    name: "Penthouse Belle Époque",
    location: "Recoleta, CABA",
    price: "USD 890.000",
    size: "210 m²",
    rooms: "3 ambientes",
    type: "Departamento",
    operation: "Venta",
    year: "1928 / restaurado 2021",
    description:
      "Un ático restaurado sobre los techos de Recoleta. Molduras originales conviven con una cocina de autor y una terraza con vista a la Basílica.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "loft-puerto-madero",
    name: "Loft Muelle Este",
    location: "Puerto Madero, CABA",
    price: "USD 640.000",
    size: "150 m²",
    rooms: "2 ambientes",
    type: "Loft",
    operation: "Alquiler",
    year: "2019",
    description:
      "Techos de 4 metros y ventanales de piso a techo sobre el dique. Un espacio pensado para quienes trabajan y viven en el mismo lienzo.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "casa-pilar",
    name: "Casa de Campo Los Alisos",
    location: "Pilar, Buenos Aires",
    price: "USD 980.000",
    size: "560 m²",
    rooms: "6 ambientes",
    type: "Casa",
    operation: "Venta",
    year: "2020",
    description:
      "Madera, piedra bola y grandes aleros que dialogan con un parque de cien años. Una casa construida para el silencio.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "departamento-palermo",
    name: "Estudio Jardín Botánico",
    location: "Palermo, CABA",
    price: "USD 310.000",
    size: "85 m²",
    rooms: "1 ambiente en suite",
    type: "Departamento",
    operation: "Venta",
    year: "2023",
    description:
      "Un estudio de autor frente al Botánico. Materiales nobles, luz cenital y una terraza privada de 20 m² pensada como refugio urbano.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "casa-costa-esmeralda",
    name: "Casa Duna Viva",
    location: "Costa Esmeralda, Buenos Aires",
    price: "USD 1.680.000",
    size: "480 m²",
    rooms: "5 ambientes",
    type: "Casa",
    operation: "Venta",
    year: "2023",
    description:
      "Levantada sobre pilotes entre médanos y pinos, con una pileta que parece continuar el horizonte del mar.",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1600&auto=format&fit=crop",
  },
];

export const featuredProperty = {
  ...properties[0],
  gallery: [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1800&auto=format&fit=crop",
  ],
  features: [
    "Espejo de agua perimetral",
    "Hormigón visto y piedra local",
    "Domótica integral",
    "Quincho con parrilla de autor",
    "Bodega climatizada",
    "Estudio independiente",
    "Cochera para 4 vehículos",
    "Seguridad perimetral 24 hs",
  ],
  nearby: [
    { name: "Club de Golf Nordelta", distance: "4 min" },
    { name: "Nordelta Shopping", distance: "8 min" },
    { name: "Colegio Northlands", distance: "10 min" },
    { name: "Marina del Lago", distance: "6 min" },
  ],
};
