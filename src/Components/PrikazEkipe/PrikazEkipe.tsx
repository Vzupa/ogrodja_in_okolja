import {MainKomp} from "../Telo";
import {Menu} from "../Menu";
import {Noga} from "../Noga";
import {useParams} from "react-router-dom";
import {ekipe} from "../../Modules/primer";

export const PrikazEkipeKomp = () => {
    const {id} = useParams();
    let index: number = 0;
    if (typeof id === "string") {
        index = parseInt(id, 10);
    }

    const izbranaEkipa = ekipe[index];

    if (!izbranaEkipa) {
        return <div>Ne najdem ekipe</div>
    }

    return(
        <div>
            <Menu ime={izbranaEkipa.ime}/>
            <MainKomp ekipa={izbranaEkipa} />
            <Noga />
        </div>
    )
};