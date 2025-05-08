import Exemplo1 from "./componentes/Exemplo1"
import Exercicio1 from "./componentes/Exercicio1"

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
    </>

  )

}