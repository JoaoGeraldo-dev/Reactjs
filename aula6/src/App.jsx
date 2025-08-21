
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exemplo1 from "./paginas/exemplo1";
import Exemplo2 from "./paginas/exemplo2";
import Home from "./paginas/Home";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exemplo1" element={<Exemplo1 />} />
        <Route path="/exemplo2" element={<Exemplo2 />} />
      </Routes>

    </BrowserRouter>

  )
}


