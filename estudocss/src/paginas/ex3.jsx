export default function ex3(){
    const titulo = {
        color: "red",
        backgroundColor :"yellow",
        textAlign :"center",
        padding : "10px"
    };
    
    return(
        <div>
            <h2 style={titulo}>Exemplo de estilos em Objeto</h2>
            <p>
                esse foi um exemplo de estilo em linha, mas utlizizando
                uma variavel objeto para armazenar os estilos.
            </p>

        </div>
    );
}