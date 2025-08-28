import{Link} from "react-router-dom";
import { useState } from "react";



export default function Exemplo1()
{
  const[nome, setNome] = useState("João Geraldo");
  const[idade, setIdade] = useState(18);
  const[resultado, setResultado] = useState(null);
  function calcular()
  {
    let dias = Number(idade) * 365;

    setResultado("Olá " + nome + " você ja viveu " + dias + "dias");
  }

  function limpar(){
    setNome("")
    setIdade("")
    setResultado("")
  }

  return (
    <div>
      <h1>Exemplo 1</h1>
      <div className="container">
      <form >
        <p>
        Digite o nome do aluno<br/>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
        </p>

        
        <p>
        Digite a idade do aluno<br/>
        <input type="number" mon={0} max={100} value={idade} onChange={(e) => setIdade(e.target.value)} />
        </p>


        
        <p>
        <input type="button" value="Exemplo 1" onClick={calcular}/>
        <input type="button" value="limpar" onClick={limpar}/>
        </p>
        
        <p>
          <b>Resultados: </b> <br />
          Nome: {nome} <br />
          Idade: {idade}
            </p>
            <p>
              {resultado}
            </p>


      </form>
      </div>
    </div>
  )
  }