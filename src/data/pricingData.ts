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
    price: 2700
  },
  {
    id: 2,
    name: "Комплекс 2",
    description: "(подмышки + бикини + голень)",
    duration: "1 час",
    price: 4200
  },
  {
    id: 3,
    name: "Комплекс 3",
    description: "(подмышки + голень)",
    duration: "45 минут",
    price: 2900
  },
  {
    id: 4,
    name: "Комплекс 4",
    description: "(голень + глубокое бикини)",
    duration: "1 час",
    price: 3500
  },
  {
    id: 5,
    name: "Комплекс 5",
    description: "(подмышки + бикини + ноги полностью)",
    duration: "1 час 15 минут",
    price: 4900
  },
  {
    id: 6,
    name: "Комплекс 6",
    description: "(подмышки + бикини + ноги полностью + руки полностью)",
    duration: "1 ч 30 мин",
    price: 5900
  },
  {
    id: 7,
    name: "Комплекс 7",
    description: "(глубокое бикини + ноги полностью)",
    duration: "1 час",
    price: 4500
  },
  {
    id: 8,
    name: "Комплекс 8",
    description: "(подмышки + ноги полностью)",
    duration: "1 час",
    price: 3800
  },
  {
    id: 9,
    name: "Комплекс 9",
    description: "(все тело тотал)",
    duration: "2 часа 30 мин",
    price: 8000
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

export interface WrapService {
  id: number;
  name: string;
  price: number;
  subscription5?: number;
  subscription10?: number;
}

export interface MassageService {
  id: number;
  name: string;
  price: number;
  subscription5?: number;
  subscription10?: number;
  additional?: string;
}

export const wrapServices: WrapService[] = [
  {
    id: 1,
    name: "Тело полностью",
    price: 2000
  },
  {
    id: 2,
    name: "Живот + ноги",
    price: 1700
  },
  {
    id: 3,
    name: "Живот",
    price: 1000
  },
  {
    id: 4,
    name: "Абонемент 5 процедур",
    price: 9000
  },
  {
    id: 5,
    name: "Абонемент 10 процедур",
    price: 15000
  }
];

export const massageServices: MassageService[] = [
  {
    id: 1,
    name: "LPG-массаж тела",
    price: 1500,
    subscription5: 6500,
    subscription10: 12000
  },
  {
    id: 2,
    name: "Костюм для массажа",
    price: 500,
    additional: "дополнительно"
  },
  {
    id: 3,
    name: "Вакуумно-роликовый массаж лица",
    price: 750,
    subscription5: 3250,
    subscription10: 5900
  }
]; 