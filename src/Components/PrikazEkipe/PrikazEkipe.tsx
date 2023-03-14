import {MainKomp} from "../Telo";
import {Menu} from "../Menu";
import {Noga} from "../Noga";
import {useParams} from "react-router-dom";
import {ekipe} from "../../Modules/primer";

export const PrikazEkipeKomp = () => {
    const {ime} = useParams();

    const izbranaEkipa = ekipe.find((ekipa) => ekipa.ime === ime);


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