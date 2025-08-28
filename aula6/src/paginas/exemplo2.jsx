import { useState } from "react";

export default function Exemplo2()
{
  const [n1,setN1] = useState(0);
  const [n2,setN2] = useState(0);
  
  const numero2
  return 
    (    <div>
      <h1>Exemplo 2</h1>
      <div className="container">
      <form >
        <p>
        Digite o primeiro numero<br/>
        <input type="text" value={numero1} onChange={(e) => setNome(e.target.value)}/>
        </p>

        
        <p>
        Digite o segundo numero <br/>
        <input type="number" mon={0} max={100} value={numero2} onChange={(e) => setIdade(e.target.value)} />
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

      <Link to={"/"}>voltar</Link>

      </form>
      </div>
    </div>
  )
  }