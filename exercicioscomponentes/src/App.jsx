import Exemplo1 from "./componentes/Exemplo1"
import Exercicio1 from "./componentes/Exercicio1"
import Exercicio4 from "./componentes/Exercicio4"
import Exercicio2 from "./componentes/exercicio2"
import Exercicio3 from "./componentes/exercicio3"

export default function App() {
  return (
    <>
      <h1>Exercicios de componentes</h1>

      <h3>Chamada para o Exemplo1</h3>
      <Exemplo1 numero1={8} numero2={2}/>
      <Exemplo1 numero1={80} numero2={22}/>
      <Exemplo1 numero1={8} numero2={25}/>
      <Exemplo1 numero1={8} numero2={2}/>


    <div>
      <h3>Exercicio 1</h3>
      <Exercicio1 temp={20}/> 
      </div>

      <div>
      <h3>Exercicio 2</h3>
      <Exercicio2 peso={50} altura={1.80}/> 
      </div>
    
      <div>
        <h3>Exercicio 3</h3>
      <Exercicio3 tipo={"t"} base={10} altura={5}/>
      <Exercicio3 tipo={"r"} base={10} altura={5}/>
      </div>
    
      <div>
        <h3>Exercicio 4</h3>
        <Exercicio4 quantidade={10}></Exercicio4>
      </div>


    </>
  )

}