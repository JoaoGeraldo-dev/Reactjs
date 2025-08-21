import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Estudo de Estados React</h1>

            <ul>
                <li><Link to="/exemplo1">Exemplo 1</Link></li>
                <li><Link to="/exemplo2">Exemplo 2</Link></li>
            </ul>
                <h3>Exercicios</h3>
            <ul>    
                <li><Link to="/ex1">Exemplo 1</Link></li>
                <li><Link to="/ex2">Exemplo 2</Link></li>
                <li><Link to="/ex3">Exemplo 3</Link></li>
                <li><Link to="/ex4">Exemplo 4</Link></li>
                <li><Link to="/ex5">Exemplo 5</Link></li>
            </ul>
        </div>
    );
}