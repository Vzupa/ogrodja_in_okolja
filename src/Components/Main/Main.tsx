import { Footer } from "../Footer";
import { Header } from "../Header";

export function Main() {
    const igralciArray = ["igralec1", "igralec2", "igralec3"];

    return (
        <div style={{ border: ' 1px solid red' }}>
            <Header />
            <h1 >Main</h1>
            <ul>
                {igralciArray.map((igralec: string, index: number): JSX.Element => {
                    return <li key={index}>{igralec}</li>;
                })}
            </ul>
        </div>
    );
}
