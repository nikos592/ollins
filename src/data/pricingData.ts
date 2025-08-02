export interface PricingPackage {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: number;
}

export interface IndividualZone {
  id: number;
  name: string;
  price: number;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: 1,
    name: "Комплекс 1",
    description: "(подмышки + глубокое бикини)",
    duration: "30 минут",
    price: 2500
  },
  {
    id: 2,
    name: "Комплекс 2",
    description: "(подмышки + бикини + голень)",
    duration: "1 час",
    price: 3900
  },
  {
    id: 3,
    name: "Комплекс 3",
    description: "(подмышки + голень)",
    duration: "45 минут",
    price: 2800
  },
  {
    id: 4,
    name: "Комплекс 4",
    description: "(голень + глубокое бикини)",
    duration: "1 час",
    price: 3200
  },
  {
    id: 5,
    name: "Комплекс 5",
    description: "(подмышки + бикини + ноги полностью)",
    duration: "1 час 15 минут",
    price: 4600
  },
  {
    id: 6,
    name: "Комплекс 6",
    description: "(подмышки + бикини + ноги полностью + руки полностью)",
    duration: "1 ч 30 мин",
    price: 5700
  },
  {
    id: 7,
    name: "Комплекс 7",
    description: "(всё тело — 7 зон)",
    duration: "2 часа",
    price: 6500
  },
  {
    id: 8,
    name: "Комплекс 8",
    description: "(глубокое бикини + ноги полностью)",
    duration: "1 час",
    price: 4200
  },
  {
    id: 9,
    name: "Комплекс 9",
    description: "(подмышки + ноги полностью)",
    duration: "1 час",
    price: 3600
  }
];

export const individualZones: IndividualZone[] = [
  // Лицо
  { id: 1, name: "Лицо — 1 зона", price: 500 },
  { id: 2, name: "Лицо полностью", price: 1200 },
  
  // Руки
  { id: 3, name: "Подмышечные впадины", price: 950 },
  { id: 4, name: "Руки до локтя", price: 1800 },
  { id: 5, name: "Руки полностью", price: 2100 },
  
  // Живот
  { id: 6, name: "Ореолы", price: 400 },
  { id: 7, name: "Линия живота", price: 500 },
  { id: 8, name: "Живот полностью", price: 900 },
  
  // Бикини
  { id: 9, name: "Бикини классическое", price: 1100 },
  { id: 10, name: "Бикини глубокое", price: 2100 },
  { id: 11, name: "Бикини лобок", price: 1300 },
  { id: 12, name: "Половые губы", price: 800 },
  { id: 13, name: "Межъягодичка", price: 800 },
  
  // Спина
  { id: 14, name: "Ягодицы", price: 800 },
  { id: 15, name: "Поясница", price: 600 },
  { id: 16, name: "Спина полностью", price: 1800 },
  
  // Ноги
  { id: 17, name: "Бедра", price: 2000 },
  { id: 18, name: "Голени", price: 2000 },
  { id: 19, name: "Ноги полностью", price: 3000 }
]; 