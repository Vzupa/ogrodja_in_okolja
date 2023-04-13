import {MainKomp} from "../Telo";
import {Menu} from "../Menu";
import {Noga} from "../Noga";
import {useParams} from "react-router-dom";
import {ekipe1} from "../../Modules/primer";
import {Ekipa} from "../../Modules/Ekipa";
import {useEkipe} from "../../App";


interface Props {
    ekipa: Ekipa[];
}


export const PrikazEkipeKomp = () => {
    const {ekipaID} = useParams();
    const {ekipe, setEkipe} = useEkipe();


    let izbranaEkipa: Ekipa | undefined;
    let id: number;
    if (typeof ekipaID === "string") {
        id = parseInt(ekipaID);
        izbranaEkipa = ekipe[id];
    }


    if (!izbranaEkipa) {
        return <div>Ne najdem ekipe</div>
    }

    // @ts-ignore
    return(
        <div>
            <Menu ime={izbranaEkipa.ime}/>
            <MainKomp ekipa={izbranaEkipa}/>
            <Noga />
        </div>
    )
};