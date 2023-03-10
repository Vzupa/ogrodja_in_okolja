import React from "react";
import { Ekipa } from "../../Modules/Ekipa";
import {Igralec} from "../../Modules/Oseba";


interface Props {
    ekipa: Ekipa;
  }

export const MainKomp: React.FC<Props> = ({ ekipa }) => {

    const [igralci, setIgralci] = React.useState(ekipa.igralci);

    return (
        <div>
            <p>Leto ustanovitve: {ekipa.letoUsanovitve}</p>
            <p>Direktor: {ekipa.direktor.ime} {ekipa.direktor.priimek}</p>
            <p>Trener: {ekipa.trener.ime} {ekipa.trener.priimek}</p>
            <Informacija ekipa={ekipa}/>
            <h3>Igralci:</h3>
            <ul>
                {igralci.map((igralec) => (
                    <IgralecInfo key={igralec.id} igralec={igralec} />
                ))}
            </ul>
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

const InfoKomponent = () => {
    return (
        <div>
            Ekipa ima dovolj igralcev
        </div>
    );
};

const OpozoriloKomp = () => {
    return (
        <div>
            Ekipa nima dovolj igralcev
        </div>
    );
};

const Informacija: React.FC<Props> = ({ ekipa }) => {
    return (
        ekipa.igralci.length < 11 ? <OpozoriloKomp /> : <InfoKomponent />
    );
};
