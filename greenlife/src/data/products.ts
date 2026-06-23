import type { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 'naturais', name: 'Produtos Naturais', icon: '🌿', count: 15 },
  { id: 'cosmeticos', name: 'Cosméticos', icon: '🧴', count: 12 },
  { id: 'alimentacao', name: 'Alimentação Saudável', icon: '🥗', count: 18 },
  { id: 'suplementos', name: 'Suplementos', icon: '💊', count: 10 },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Óleo de Coco Orgânico',
    category: 'naturais',
    price: 29.90,
    image: 'https:
    description: 'Óleo de coco extra virgem, prensado a frio, 100% orgânico.',
    badge: 'Orgânico',
  },
  {
    id: 2,
    name: 'Sabonete Artesanal de Lavanda',
    category: 'cosmeticos',
    price: 18.90,
    image: 'https:
    description: 'Sabonete natural com óleos essenciais de lavanda e camomila.',
    badge: 'Vegano',
  },
  {
    id: 3,
    name: 'Mix de Granola Premium',
    category: 'alimentacao',
    price: 24.90,
    image: 'https:
    description: 'Mix de granola com castanhas, frutas secas e mel orgânico.',
    badge: 'Sem Glúten',
  },
  {
    id: 4,
    name: 'Vitamina C + Zinco',
    category: 'suplementos',
    price: 45.90,
    image: 'https:
    description: 'Suplemento alimentar com alta concentração de Vitamina C e Zinco.',
    badge: 'Natural',
  },
  {
    id: 5,
    name: 'Manteiga de Karité',
    category: 'cosmeticos',
    price: 32.90,
    image: 'https:
    description: 'Manteiga de karité pura, hidratante e nutritiva para pele e cabelos.',
    badge: 'Cruelty-Free',
  },
  {
    id: 6,
    name: 'Chá Verde Matcha',
    category: 'alimentacao',
    price: 39.90,
    image: 'https:
    description: 'Pó de chá verde matcha de alta qualidade, rico em antioxidantes.',
    badge: 'Premium',
  },
  {
    id: 7,
    name: 'Shampoo Sólido de Alecrim',
    category: 'cosmeticos',
    price: 22.90,
    image: 'https:
    description: 'Shampoo sólido natural com óleo de alecrim e argila verde.',
    badge: 'Zero Plástico',
  },
  {
    id: 8,
    name: 'Whey Protein Isolado',
    category: 'suplementos',
    price: 89.90,
    image: 'https:
    description: 'Whey protein isolado de alta qualidade, 90% de proteína pura.',
    badge: 'Livre de Lactose',
  },
];