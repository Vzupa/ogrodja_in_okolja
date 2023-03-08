# Vaje pri projektu Ogrodja in Okolja za Razvoj Spletnih Rešitev (OORSR)


## Naloga 1: TypeScript s ponovitvijo JavaScript

Pripravite TypeScript aplikacijo, ki bo vključevala dva modula

***Modul Oseba***, ki uvede tri vmesnike:

1. Oseba: lastnosti: ime: string, priimek: string, letoRojstva: number in opcijska lastnost krajRojstva: string in id: number. 
2. Igralec: razširi vmesnik Oseba z lastnostmi visina: number, teza: number in poskodovan: boolean. 
3. Funkcionar: razširi vmesnik Oseba z lastnostjo vloga: string in veljavnost: number. 

Vmesnika Igralec in Funkcionar izvozite. 

***Modul Ekipa***, v katerem izvozite istoimenski razred Ekipa z lastnostmi: 

    ime: string 
    letoUstanovitve: number 
    direktor: Funkcionar 
    trener: Funkcionar 
    igralci: Igralec[] 

Ob tem naj razred vsebuje tudi metode:

    dodajIgralca(igralec: Igralec), ki je tipa void in doda igralca ekipi;
    posodobiIgralca(igralec: Igralec), ki je tipa void in posodobi igralca glede na id;
    odstraniIgralca(id: number), ki odstrani igralca glede na podan id;
    izpisiPodatke(), ki vrne string s podatki o ekipi. 

Ne pozabite na constructor(). 


## Naloga2: Osnove React

Vzpostavite React TypeScript aplikacijo. Na podlagi aplikacije iz prejšnje naloge pripravite uporabniški vmesnik za pregled ekipe

- Komponenta ***Menu***, ki vsebuje ime ekipe v komponenti `<h1>`. 
- Komponenta ***Telo***, ki vsebuje izpis podatkov o ekipi in vseh igralcev, ki so ločene podkomponente (implementirane kot polje komponent). 
- Komponenta ***Igralec*** vsebuje izpis podatkov igralca. Podatke posameznega igralca si izmislite (vsaj en atribut iz naslednjih tipov: boolean, string, number). Vsi igralci imajo lahko zaenkrat enake podatke. 
- Komponenta ***Opozorilo***, ki se prikaže ko je število igralcev manjše od 11. Komponenta ustrezno obvesti, da ima ekipa premalo igralcev.
- Komponenta ***Info***, ki se prikaže ko je število igralcev večje ali enako 11. Komponenta obvesti, da ima ekipa dovolj igralcev.
- Komponenta ***Noga***, ki vsebuje podatke o avtorju spletne strani. 


Vse tri komponente dodajte na glavno aplikacijo in jih tudi oblikujte s pomočjo CSS (noga naj bo zmeraj na dnu strani, menu na vrhu, igralci pa naj bodo oblikovani po želji). Podatki so lahko izmišljeni in zaenkrat še ne implementirajo logike s pomočjo funkcij iz prve naloge. 

## Naloga3: React - nadaljevanje

Prejšnjo nalogo posodobite z uporabo props in state ter react-router. 

1. V komponenti Menu s pomočjo props sprejmite ime ekipe in ga tudi izpišite. 

2. V komponenti Telo s pomočjo props sprejmite ekipo, da lahko izpišete njene podatke. V state hranite seznam vseh igralcev. 

3. V komponenti Igralec s pomočjo props sprejmite igralca, da izpišete njegove podatke. 

4. Ob prvi ekipi ustvarite še drugo in s pomočjo react-router implementirajte prikaz posamezne ekipe glede na njen ID v polju ekip. 

5. Dodajte še eno komponento SeznamEkip, ki jo s pomočjo react-router nastavite kot glavno komponento, ki vsebuje povezave do vseh ekip. 
