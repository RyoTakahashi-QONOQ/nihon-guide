export type Season = "spring" | "summer" | "autumn" | "winter";

export interface Region {
  id: string;
  n: string;
  en: string;
  num: string;
  cnt: string;
  img: string;
  css: string;
}

export interface Spot {
  id: string;
  n: string;
  en: string;
  r: string;
  rl: string;
  cat: string;
  szn: Season[];
  rt: number;
  bdg: string;
  desc: string;
  best: string;
  tags: string[];
  img: string;
  css: string;
}

export interface Food {
  n: string;
  en: string;
  cat: string;
  desc: string;
  img: string;
  css: string;
}

export interface Category {
  ico: string;
  n: string;
  en: string;
  num: number;
  id: string;
}

export interface MapPin {
  n: string;
  en: string;
  r: string;
  d: string;
  img: string;
}
