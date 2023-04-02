import {Funkcionar} from "../../Modules/Oseba";
import React from "react";
import {Ekipa} from "../../Modules/Ekipa";
import {Link} from "react-router-dom";
import {useEkipe} from "../../App";
import {ekipe1} from "../../Modules/primer";


const initalStateFunkcionar = {
    id: 0,
    ime: "",
    priimek: "",
    letoRojstva: 0,
    vloga: "Trener",
    veljavnost: 0
}


export const DodajEkipo = () => {

    const {ekipe, setEkipe} = useEkipe();

    const [ekipa, setEkipa] = React.useState<Ekipa>(
        new Ekipa("", 0, initalStateFunkcionar, initalStateFunkcionar)
    );


    const dodajFunkcionarja = (funkcionar: Funkcionar) => {
        console.log(funkcionar.vloga)
        ekipa.dodajFunkcionarja(funkcionar);
    }


    const dodajEkipo = (ekipa: Ekipa) => {
        ekipe.push(ekipa);
        setEkipe(ekipe);
        console.log(ekipe)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEkipa((prevState: Ekipa) => ({
            ...prevState,
           [name]: value
        }) as Ekipa);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dodajEkipo(ekipa);
        event.currentTarget.reset();
    }


    return (
        <div>
            <h1>Dodaja ekipe</h1>

            <DodajFunkcionarja dodajFunkcionarja={dodajFunkcionarja} />
            <br/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="ime">Ime:</label>
                <input type="text" id="ime" name={"ime"} onChange={handleChange} />

                <label htmlFor="letoUsanovitve">Leto usanovitve:</label>
                <input type="text" id="letoUsanovitve" name="letoUsanovitve" onChange={handleChange} />

                <button type="submit">Dodaj</button>
            </form>
        </div>
    );
}


export const DodajFunkcionarja = ({dodajFunkcionarja} : {
    dodajFunkcionarja: (funkcionar: Funkcionar) => void;
}) => {

    const [funkcionar, setFunkcionar] = React.useState<Funkcionar>(initalStateFunkcionar);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = event.target;
        setFunkcionar({...funkcionar, [name]: value});
    }

    const handeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dodajFunkcionarja(funkcionar);
        console.log(funkcionar);
        setFunkcionar(initalStateFunkcionar);
        event.currentTarget.reset();
    }

    return (
        <div>
            <b>Dodaj Funkiconarja</b>
            <form onSubmit={handeSubmit}>
                <label htmlFor="ime">Ime:</label>
                <input type="text" id="ime" name={"ime"} onChange={handleChange} />

                <label htmlFor="priimek">Priimek:</label>
                <input type="text" id="priimek" name="priimek" onChange={handleChange} />

                <label htmlFor="letoRojstva">letoRojstva:</label>
                <input type="number" id="letoRojstva" name="letoRojstva" onChange={handleChange} />

                <select onChange={handleChange} id="vloga" name="vloga">
                    <option value="Trener">Trener</option>
                    <option value="Direktor">Funkcionar</option>
                </select>

                <label htmlFor="veljavnost">veljavnost:</label>
                <input type="number" id="veljavnost" name="veljavnost" onChange={handleChange} />

                <button type="submit">Dodaj</button>
            </form>
        </div>
    );
}