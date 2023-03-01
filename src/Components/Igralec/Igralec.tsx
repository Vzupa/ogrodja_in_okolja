import { Igralec } from "../../Modules/Oseba";
import React from "react";

interface Props {
    igralec: Igralec;
  }

export const IgralecInfo: React.FC<Props> = ({ igralec }) => {
    return (
        <div>
            <b>{igralec.ime} {igralec.priimek}</b>
            <p>Leto rojstva: {igralec.letoRojstva}</p>
            <p>Visina: {igralec.visina} cm</p>
            <p>Teza: {igralec.teza} kg</p>
            <p>Poskodovan: {igralec.poskodovan ? 'Da' : 'Ne'}</p>
        </div>
    )
}