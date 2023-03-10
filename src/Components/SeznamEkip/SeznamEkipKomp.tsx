import {ekipe} from "../../Modules/primer";
import {Link} from "react-router-dom";
import {Noga} from "../Noga";

export const SeznamEkipKomp = () => {
    return (
        <div>
            <ul>
                {ekipe.map((ekipa) => (
                    <li>
                        <Link to={`/${ekipa.ime}`} >
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