
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exemplo1 from "./paginas/exemplo1";
import Exemplo2 from "./paginas/exemplo2";
import Home from "./paginas/Home";
import Exercicio1 from "./paginas/exercicio1";
import Exercicio2 from "./paginas/exercicio2";
import Exercicio3 from "./paginas/exercicio3";
import Exercicio4 from "./paginas/exercicio4";
import Exercicio5 from "./paginas/exercicio5";
import "./paginas/estilos.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exemplo1" element={<Exemplo1 />} />
        <Route path="/exemplo2" element={<Exemplo2 />} />

        <Route path="/ex1" element={<Exercicio1/>} />
        <Route path="/ex2" element={<Exercicio2 />} />
        <Route path="/ex3" element={<Exercicio3 />} />
        <Route path="/ex4" element={<Exercicio4 />} />
        <Route path="/ex5" element={<Exercicio5 />} />
      </Routes>

    </BrowserRouter>

  )
}


