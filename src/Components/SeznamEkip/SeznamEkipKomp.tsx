import {ekipe1} from "../../Modules/primer";
import {Link} from "react-router-dom";
import {Noga} from "../Noga";
import {useEkipe} from "../../App";
import {Ekipa} from "../../Modules/Ekipa";

interface Props {
    ekipe: Ekipa[];
}

export const SeznamEkipKomp = (props: Props) => {

    return (
        <div>
            <ul>
                {props.ekipe && props.ekipe.map((ekipa: Ekipa) => (
                    <li key={ekipa.ime}>
                        <Link to={`/ekipa/${props.ekipe.indexOf(ekipa)}`} >
                            {ekipa.ime}
                        </Link>
                    </li>
                    ))
                }
            </ul>
            <Noga/>
        </div>
    )
};