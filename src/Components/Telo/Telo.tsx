import React from "react";
import { Ekipa } from "../../Modules/Ekipa";
import {Igralec} from "../../Modules/Oseba";
import {ekipa} from "../../Modules/primer";


interface Props {
    ekipa: Ekipa;
  }

export const EkipaInfo: React.FC<Props> = ({ ekipa }) => {

    const [igralci, setIgralci] = React.useState(ekipa.igralci);

    return (
        <div>
            <p>Leto ustanovitve: {ekipa.letoUsanovitve}</p>
            <p>Direktor: {ekipa.direktor.ime} {ekipa.direktor.priimek}</p>
            <p>Trener: {ekipa.trener.ime} {ekipa.trener.priimek}</p>
            <Informacija />
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
            <b>{igralec.ime} {igralec.priimek}</b>
            <p>Leto rojstva: {igralec.letoRojstva}</p>
            <p>Visina: {igralec.visina} cm</p>
            <p>Teza: {igralec.teza} kg</p>
            <p>Poskodovan: {igralec.poskodovan ? 'Da' : 'Ne'}</p>
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

const OpozoriloKomponent = () => {
    return (
        <div>
            Ekipa nima dovolj igralcev
        </div>
    );
};

const Informacija = () => {
    return (
        ekipa.igralci.length < 11 ? <OpozoriloKomponent /> : <InfoKomponent />
    );
};
