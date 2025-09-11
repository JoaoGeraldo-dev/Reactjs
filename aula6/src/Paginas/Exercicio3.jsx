import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio3()
{
  const [valor, setValor] = useState(0);
  const [taxa, setTaxa] = useState(0);
  const [atraso, setAtraso] = useState(0);
  const [resultado, setResultado] = useState('');


  function calcular() {
    let parc = Number(valor) + (Number(valor)*(Number(taxa)**2/100)*Number(atraso));
    setResultado(
      <div>
        O valor da parcela é {parc} <br />
      </div>
    );
  }



  return (
    <div>
      <h1>Exercicio 3</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite o valor da prestação: <br />
            <input type="number" value={valor} onChange={e => setValor(e.target.value)} />
          </p>
          <p>
            Digite a taxa de juros: <br />
            <input type="number" value={taxa} onChange={e => setTaxa(e.target.value)} />
          </p>
          <p>
            Digite o tempo (em dias) de atraso: <br />
            <input type="number" value={atraso} onChange={e => setAtraso(e.target.value)} />
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