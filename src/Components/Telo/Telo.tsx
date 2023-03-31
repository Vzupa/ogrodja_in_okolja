import React from "react";
import { Ekipa } from "../../Modules/Ekipa";
import {Igralec} from "../../Modules/Oseba";
import {initMetric} from "web-vitals/dist/modules/lib/initMetric";
import {ekipe1} from "../../Modules/primer";
import {useEkipe} from "../../App";


interface Props {
    ekipa: Ekipa;
  }

export const MainKomp: React.FC<Props> = ({ ekipa}) => {

    const {ekipe, setEkipe} = useEkipe();

    const dodajIgralca = (igralec: Igralec) => {
        const updatedEkipa = [...ekipe1];
        const ekipaToUpdate = updatedEkipa[updatedEkipa.indexOf(ekipa)];

        igralec.id = ekipaToUpdate.igralci.length + 2;
        ekipaToUpdate.dodajIgralca(igralec);

        const newItems = updatedEkipa.map((item) => {
            if(updatedEkipa.indexOf(item) === updatedEkipa.indexOf(ekipa)) {
                return ekipaToUpdate;
            }
            else {
                return item;
            }
        });
        setEkipe(newItems);
    }

    return (
        <div>
            <div>
                <Informacija ekipa={ekipa}/>
                <p>Leto ustanovitve: {ekipa.letoUsanovitve}</p>
                <p>Direktor: {ekipa.direktor.ime} {ekipa.direktor.priimek}</p>
                <p>Trener: {ekipa.trener.ime} {ekipa.trener.priimek}</p>
                <h3>Igralci:</h3>
                <ul>
                    {ekipa.igralci.map((igralec) => (
                        <IgralecInfo key={igralec.id} igralec={igralec} />
                    ))}
                </ul>
            </div>
            <div>
                <DodajIgralca dodajIgralca={dodajIgralca} />
            </div>
        </div>
    )
}

interface PropsIgralec {
    igralec: Igralec;
}

const IgralecInfo: React.FC<PropsIgralec> = ({ igralec }) => {
    return (
        <div>
            <p>
                <b>{igralec.ime} {igralec.priimek}: </b>
                Leto rojstva: {igralec.letoRojstva}, Visina: {igralec.visina} cm,
                Teza: {igralec.teza} kg, Poskodovan: {igralec.poskodovan ? 'Da' : 'Ne'}
            </p>
        </div>
    );
};


const intialState = {
    id: 0,
    ime: "",
    priimek: "",
    visina: 0,
    teza: 0,
    letoRojstva: 0,
    poskodovan: false
}


const DodajIgralca = ({dodajIgralca}: {
    dodajIgralca: (igralec: Igralec) => void;
}) => {

    const [igralec, setIgralec] = React.useState<Igralec>(intialState);

    const handeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dodajIgralca(igralec);
        setIgralec(intialState);
        event.currentTarget.reset();
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
        setIgralec((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }));
    }


    return (
        <div>
            <form onSubmit={handeSubmit}>
                <label htmlFor="ime">Ime:</label>
                <input type="text" id="ime" name={"ime"} onChange={handleChange} />

                <label htmlFor="priimek">Priimek:</label>
                <input type="text" id="priimek" name="priimek" onChange={handleChange} />

                <label htmlFor="visina">visina:</label>
                <input type="numer" id="visina" name="visina" onChange={handleChange} />

                <label htmlFor="teza">teza:</label>
                <input type="number" id="teza" name="teza" onChange={handleChange} />

                <label htmlFor="letoRojstva">letoRojstva:</label>
                <input type="number" id="letoRojstva" name="letoRojstva" onChange={handleChange} />

                <label htmlFor="poskodovan">poskodovan:</label>
                <input type="checkbox" id="poskodovan" name="poskodovan" onChange={handleChange} />
                <button type="submit">Dodaj</button>
            </form>
        </div>
    )
}


const InfoKomponent = () => {
    return (
        <>
            Ekipa ima dovolj igralcev
        </>
    );
};

const OpozoriloKomp = () => {
    return (
        <>
            Ekipa nima dovolj igralcev
        </>
    );
};

const Informacija: React.FC<Props> = ({ ekipa }) => {
    return (
        <div>
            <b>
                {ekipa.igralci.length < 11 ? (<OpozoriloKomp/>) : (<InfoKomponent/>)} : {ekipa.igralci.length}
            </b>
        </div>
    );
};
