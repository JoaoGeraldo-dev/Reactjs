import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Estudo de Estados React</h1>

            <ul>
                <li><Link to="/ex1">Exemplo 1</Link></li>
                <li><Link to="/ex2">Exemplo 2</Link></li>
            </ul>
        </div>
    );
}