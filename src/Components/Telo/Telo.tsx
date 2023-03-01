import React from "react";
import { IgralecInfo } from "../Igralec";
import { Ekipa } from "../../Modules/Ekipa";

interface Props {
    ekipa: Ekipa;
  }

export const EkipaInfo: React.FC<Props> = ({ ekipa }) => {
    return (
        <div>
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
    )
}