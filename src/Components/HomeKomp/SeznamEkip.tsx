import {ekipe} from "../../Modules/primer";
import useCase from 'react';
import {Link} from "react-router-dom";

const SeznamEkip = () => {
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
        </div>
    )
}

export default SeznamEkip