import { BrowserRouter,  Routes, Route} from "react-router-dom";
import Home from "./paginas/Home";
import SantaCatarina from "./paginas/SantaCatarina";
import SaoPaulo from "./paginas/SaoPaulo";
import EspiritoSanto from "./paginas/EspiritoSanto";
import Parana from "./paginas/Parana";
import RioGrandeSul from "./paginas/RioGrandeSul";
import RioJaneiro from "./paginas/RioJaneiro";
import MinasGerais from "./paginas/MinasGerais";


export default function App()
{
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/SP" element={<SaoPaulo />}></Route>
                <Route path="/RJ" element={<RioJaneiro />}></Route>
                <Route path="/RS" element={<RioGrandeSul />}></Route>
                <Route path="/ES" element={<EspiritoSanto />}></Route>
                <Route path="/SC" element={<SantaCatarina />}></Route>
                <Route path="/MG" element={<MinasGerais />}></Route>
                <Route path="/PR" element={<Parana />}></Route>
                
                
            </Routes>
            </BrowserRouter>


        </div>
    );
}