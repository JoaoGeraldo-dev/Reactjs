import {Link} from "react-router-dom";

export default function RioJaneiro(){
    return(
        <div>
        <h1>Seja bem vindo a tropa do 22</h1>

        <p>
            <img src="/RJ.png" width={500} />
        </p>

        <p>
            <Link to ="/"> Voltar </Link>
        </p>
    </div>
    );
}