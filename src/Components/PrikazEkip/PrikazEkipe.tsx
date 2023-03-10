import {EkipaInfo} from "../Telo";
import {Menu} from "../Menu";
import {Noga} from "../Noga";
import {useParams} from "react-router-dom";
import {ekipe} from "../../Modules/primer";

const PrikazEkipe = () => {
    const {ime} = useParams();

    const izbranaEkipa = ekipe.find((ekipa) => ekipa.ime === ime);

    if (!izbranaEkipa) {
        return <div>Ne najdem ekipe</div>
    }

    return(
        <div>
            <Menu ime={izbranaEkipa.ime}/>
            <EkipaInfo ekipa={izbranaEkipa} />
            <Noga />
        </div>
    )
}

export default PrikazEkipe;