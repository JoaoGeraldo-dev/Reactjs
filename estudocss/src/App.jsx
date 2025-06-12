import Ex1 from "./paginas/ex1";
import Ex2 from "./paginas/ex2";
import Ex3 from "./paginas/ex3";
import Ex4 from "./paginas/ex4";
import Ex5 from "./paginas/ex5";
export default function App() {
  return(
    <div>
      <h1> Aula 02- Estilos CSS no React</h1>

    <Ex1 />
    <hr />
    <Ex2 />
    <hr />
    <Ex3 />
    <hr />
    <Ex4 cor="red"/>
    <Ex4 cor="pink"/>
    <Ex4 cor="blue"/>
    <Ex4 cor="purple"/>
    <Ex5 n1={6} n2={10}/>
      </div>


  );
}
