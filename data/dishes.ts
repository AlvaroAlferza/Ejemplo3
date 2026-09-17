export type Dish = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  featured?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
};

export const dishes: Dish[] = [
  {
    id: 1,
    name: "Causa de camarones",
    category: "Entradas",
    description:
      "Causa amarilla rellena de camarones, palta y una delicada salsa de ají amarillo.",
    price: 32,
    image: "/images/causa.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Ceviche de pesca del día",
    category: "Entradas",
    description:
      "Pesca fresca marinada en leche de tigre, ají limo, cebolla roja y cilantro.",
    price: 42,
    image: "/images/ceviche.jpg",
    featured: true,
    spicy: true,
  },
  {
    id: 3,
    name: "Lomo saltado",
    category: "Platos de fondo",
    description:
      "Lomo de res salteado al wok con cebolla, tomate, papas doradas y arroz.",
    price: 48,
    image: "/images/lomo-saltado.jpg",
    featured: true,
  },
  {
    id: 4,
    name: "Ají de gallina",
    category: "Platos de fondo",
    description:
      "Pollo deshilachado en una cremosa salsa de ají amarillo, acompañado de arroz.",
    price: 38,
    image: "/images/gallina.jpg",
  },
  {
    id: 5,
    name: "Arroz con mariscos",
    category: "Platos de fondo",
    description:
      "Arroz cremoso preparado con mariscos frescos, vino blanco y fondo de pescado.",
    price: 45,
    image: "/images/arroz-mariscos.jpg",
  },
  {
    id: 6,
    name: "Picanha a la parrilla",
    category: "Parrillas",
    description:
      "Corte de res a la parrilla servido con papas nativas y salsa de chimichurri.",
    price: 58,
    image: "/images/picania.jpg",
    featured: true,
  },
  {
    id: 7,
    name: "Anticuchos de corazón",
    category: "Parrillas",
    description:
      "Tradicionales anticuchos marinados en especias y servidos con papa dorada.",
    price: 36,
    image: "/images/anticuchos.jpg",
    spicy: true,
  },
  {
    id: 8,
    name: "Suspiro limeño",
    category: "Postres",
    description:
      "Clásico suspiro limeño con manjar blanco, merengue italiano y canela.",
    price: 22,
    image: "/images/suspiro.jpg",
  },
  {
    id: 9,
    name: "Tarta de chocolate",
    category: "Postres",
    description:
      "Tarta de chocolate oscuro con ganache y sal de Maras.",
    price: 24,
    image: "/images/tarta-chocolate.jpg",
  },
  {
    id: 10,
    name: "Chicha morada",
    category: "Bebidas",
    description:
      "Chicha morada tradicional preparada con maíz morado, piña y especias.",
    price: 12,
    image: "/images/chicha.jpg",
    vegetarian: true,
  },
  {
    id: 11,
    name: "Maracuyá sour",
    category: "Bebidas",
    description:
      "Cóctel de maracuyá, pisco, limón y clara de huevo.",
    price: 28,
    image: "/images/maracuya-sour.jpg",
  },
  {
    id: 12,
    name: "Limonada de hierbabuena",
    category: "Bebidas",
    description:
      "Limonada natural con hierbabuena fresca y un toque de miel.",
    price: 14,
    image: "/images/limonada.jpg",
    vegetarian: true,
  },
];