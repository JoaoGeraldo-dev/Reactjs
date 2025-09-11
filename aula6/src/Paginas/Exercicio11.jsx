import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio11()
{
  const [a1, setA1] = useState(0);
  const [r, setR] = useState(0);
  const [n, setN] = useState(0);
  const [resultado, setResultado] = useState('')


  function calcular() {
    
    let termoGA = Number(a1) + (Number(n)-1)* Number(r);
    let termoGG = Number(a1) * (Number(r)**(Number(n) - 1)); 
    let sna = (Number(a1) + (Number(n) + termoGA) * Number(n))/2 ;
    let sng = (Number(a1) * Number(r)**Number(n) - 1)/ Number(r) - 1;

    let somaINF = Number(a1)/ 1 - Number(r); 
  

    setResultado(
        <div>
            <div style={{color:"red"}}>
            <br/>
        Aritmética: <br/>
        O termo geral é de {termoGA} <br />
        A soma Finita é de {sna} <br />
        A soma infinita é de +/-∞ <br /><br/>
            </div>


            <div style={{color:"blue"}}>
            <br/>
        Geomatrica: <br/><br/>
        O termo geral é de {termoGG} <br />
        A soma Finita é de {sng} <br />
        A soma infinita é de {termoGG} <br /><br/>
            </div>
        </div>
    );
}

  return (
    <div>
      <h1>Exercicio 11</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite o valor de a1: <br />
            <input type="number" value={a1} onChange={e => setA1(e.target.value)}  />
          </p>
          <p>
            Digite o valor de R: <br />
            <input type="number" value={r} onChange={e => setR(e.target.value)} />
          </p>

          <p>
            Digite o valor de N: <br />
            <input type="number" value={n} onChange={e => setN(e.target.value)} />
          </p>



          <p>
            <input type="button" value="Calcular" onClick={calcular} />
          </p>
        </form>
        <p>
          Resultado: {resultado}
        </p>
        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}