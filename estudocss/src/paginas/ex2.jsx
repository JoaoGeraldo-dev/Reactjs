import "./estilo.css";


export default function Ex2()
{
    return(
        <div>
            <h2 className="titulo">Exemplo CSS puro</h2>
    
          <p> Os estilos são <span style={{color:"red", fontstyle:"italic"}}>aplicados diretamente</span> nos elementos
            do HTML que estão nos compontes do React
            </p>
        </div>

    );

}