import {Link} from "react-router-dom";

export default function Home(){
    return(
        <div>
            <h1>Estudo de Rotas no React</h1>
            <ul><Link to="/sp">Sâo Paulo</Link></ul>

            

        </div>
    );
}