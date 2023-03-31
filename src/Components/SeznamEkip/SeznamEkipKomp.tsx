import {ekipe1} from "../../Modules/primer";
import {Link} from "react-router-dom";
import {Noga} from "../Noga";

export const SeznamEkipKomp = () => {
    return (
        <div>
            <ul>
                {ekipe1.map((ekipa) => (
                    <li>
                        <Link to={`/ekipa/${ekipe1.indexOf(ekipa)}`} >
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