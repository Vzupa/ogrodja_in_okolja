import { Igralec, Funkcionar } from './Oseba';

export class Ekipa {
    ime: string;
    letoUsanovitve: number;
    direktor: Funkcionar;
    trener: Funkcionar;
    igralci: Igralec[];

    constructor(ime: string, letoUstanovitve: number, direktor: Funkcionar, trener: Funkcionar){
        this.ime = ime;
        this.letoUsanovitve = letoUstanovitve;
        this.direktor = direktor;
        this.trener = trener;
        this.igralci = []
    }

    dodajIgralca(igralec: Igralec){
        this.igralci.push(igralec);
    }

    odstraniIgralca(id: number){
        this.igralci = this.igralci.filter((i) => i.id !== id);
    }

    posodobiIgralca(igralec: Igralec){
        for (let i = 0; i < this.igralci.length; i++) {
            if (this.igralci[i].id === igralec.id) {
              this.igralci[i] = igralec;
              break;
            }
          }
        // let index = this.igralci.findIndex((i) => i.id === igralec.id);
        // if (index != -1){
        //     this.igralci[index] = igralec;
        // }
    }

    izpisi(funkcionar: Funkcionar){
        let podatki = `${funkcionar.ime} ${funkcionar.priimek}, Rojen: ${funkcionar.letoRojstva} ` +
        `Vloga: ${funkcionar.vloga}, Veljavnost: ${funkcionar.veljavnost}`;
        return podatki;
    }

    izpisiPodatke(){
        let podatki = `Ekipa: ${this.ime}\n Leto ustanovitve: ${this.letoUsanovitve}\n Direktor: ${this.izpisi(this.direktor)}\n ` +
        `Trener: ${this.izpisi(this.trener)}\n Ekipa:\n`;

        this.igralci.forEach((igralec) => {
            podatki += `  Igralec: ${igralec.ime} ${igralec.priimek}\n  Rojen: ${igralec.letoRojstva}\n  Poškodovan: ${igralec.poskodovan}\n\n`;
        })

        return podatki;
    }

}