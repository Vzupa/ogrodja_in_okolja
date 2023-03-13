import {ekipe} from "../../Modules/primer";
import {Link} from "react-router-dom";
import {Noga} from "../Noga";

export const SeznamEkipKomp = () => {
    return (
        <div>
            <ul>
                {ekipe.map((ekipa) => (
                    <li>
                        <Link to={`/${ekipe.indexOf(ekipa)}`} >
                            {ekipa.ime}
                        </Link>
                    </li>
                    ))
                };
            </ul>
            <Noga/>
        </div>
    )
};