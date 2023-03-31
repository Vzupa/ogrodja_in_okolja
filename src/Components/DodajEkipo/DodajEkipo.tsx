import {Funkcionar} from "../../Modules/Oseba";
import React from "react";

const initalStateEkipa = {
    ime: "",
    letoUstanovitve: 0,
    direktor: null,
    trener: null,
    igralci: []
}

export const DodajEkipo = () => {
    return (
            <div>
                LMAO
            </div>
    );
}

const initalStateFunkcionar = {
    id: 0,
    ime: "",
    priimek: "",
    letoRojstva: 0,
    vloga: "",
    veljavnost: 0
}

const DodajFunkcionarja = ({dodajFunkcionarja} : {
    dodajFunkcionarja: (funkcionar: Funkcionar) => void;
}) => {

    const [funkcionar, setFunkcionar] = React.useState<Funkcionar>(initalStateFunkcionar);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFunkcionar({...funkcionar, [name]: value});
    }

    const handeSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    }


    return (
        <div>
            <b>Dodaj Funkiconarja</b>
            <form onSubmit={handeSubmit}>
                <label htmlFor="ime">Ime:</label>
                <input type="text" id="ime" name={"ime"} onChange={handleChange} />

                <label htmlFor="priimek">Priimek:</label>
                <input type="text" id="priimek" name="priimek" onChange={handleChange} />

                <label htmlFor="visina">visina:</label>
                <input type="numer" id="visina" name="visina" onChange={handleChange} />

                <select onChange={handleChange}>
                    <option value="Trener">Trener</option>
                    <option value="Funkcionar">Funkcionar</option>
                </select>

                <label htmlFor="veljavnost">veljavnost:</label>
                <input type="number" id="veljavnost" name="veljavnost" onChange={handleChange} />

                <button type="submit">Dodaj</button>
            </form>
        </div>
    );
}