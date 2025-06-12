export default function ex4({cor}){
    return(
        <div>
            <h2 style={{border:"2px solid " + cor, textAlign:"center"}}>Exercicio 4- Estilos CSS no React</h2>
            <p style={{textAlign:"center ", color: cor}}>este paragrafo esta com a cor <strong>{cor}</strong></p>
        </div>



    );
}