import { Igralec, Funkcionar } from './Oseba';
import { Ekipa } from './Ekipa';

export const direktor: Funkcionar = {
  ime: 'Janez',
  priimek: 'Novak',
  letoRojstva: 1980,
  id: 1,
  vloga: 'direktor',
  veljavnost: 3
};
export const trener: Funkcionar = {
  ime: 'Ana',
  priimek: 'Kovač',
  letoRojstva: 1985,
  id: 2,
  vloga: 'trener',
  veljavnost: 3
};
export const igralec1: Igralec = {
  ime: 'Luka',
  priimek: 'Modrić',
  letoRojstva: 1985,
  id: 2,
  visina: 172,
  teza: 70,
  poskodovan: false
};

export const igralec2: Igralec = {
  ime: 'Cristiano',
  priimek: 'Ronaldo',
  letoRojstva: 1985,
  id: 3,
  visina: 187,
  teza: 83,
  poskodovan: false
};

export const igralec3: Igralec = {
  ime: 'Lionel',
  priimek: 'Messi',
  letoRojstva: 1987,
  id: 4,
  visina: 170,
  teza: 72,
  poskodovan: true
};

export const igralec4: Igralec = {
  ime: 'Kevin',
  priimek: 'De Bruyne',
  letoRojstva: 1991,
  id: 5,
  visina: 181,
  teza: 70,
  poskodovan: false
};

export const igralec5: Igralec = {
  ime: 'Kylian',
  priimek: 'Mbappe',
  letoRojstva: 1998,
  id: 6,
  visina: 178,
  teza: 73,
  poskodovan: false
};

export const igralec6: Igralec = {
  ime: 'Neymar',
  priimek: '',
  letoRojstva: 1992,
  id: 7,
  visina: 175,
  teza: 68,
  poskodovan: true
};

export const igralec7: Igralec = {
  ime: 'Mohamed',
  priimek: 'Salah',
  letoRojstva: 1992,
  id: 8,
  visina: 175,
  teza: 71,
  poskodovan: false
};

export const igralec8: Igralec = {
  ime: 'Robert',
  priimek: 'Lewandowski',
  letoRojstva: 1988,
  id: 9,
  visina: 184,
  teza: 80,
  poskodovan: false
};

export const igralec9: Igralec = {
  ime: 'Harry',
  priimek: 'Kane',
  letoRojstva: 1993,
  id: 10,
  visina: 188,
  teza: 86,
  poskodovan: false
};

export const igralec10: Igralec = {
  ime: 'Antoine',
  priimek: 'Griezmann',
  letoRojstva: 1991,
  id: 11,
  visina: 176,
  teza: 73,
  poskodovan: false
};

export const igralec11: Igralec = {
  ime: 'Sadio',
  priimek: 'Mane',
  letoRojstva: 1992,
  id: 12,
  visina: 175,
  teza: 69,
  poskodovan: false
};


export const ekipa = new Ekipa('NK Maribor', 1960, direktor, trener);

ekipa.dodajIgralca(igralec1);
ekipa.dodajIgralca(igralec2);
ekipa.dodajIgralca(igralec3);
ekipa.dodajIgralca(igralec4);
ekipa.dodajIgralca(igralec5);
ekipa.dodajIgralca(igralec6);
ekipa.dodajIgralca(igralec7);
ekipa.dodajIgralca(igralec8);
ekipa.dodajIgralca(igralec9);
ekipa.dodajIgralca(igralec10);
ekipa.dodajIgralca(igralec11);