import "./App.css";


import { Routes, Route, Link } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Clientes from "./pages/Clientes";
import Pedidos from "./pages/Pedidos";
import Informes from "./pages/Informes";

function App(){

    return(

        <div className="container">

            <header>

                <h1>Sistema de Cafetería</h1>

                <nav>
                    
                    <Link to="/">Inicio</Link>

                    <Link to="/productos">Productos</Link>

                    <Link to="/clientes">Clientes</Link>

                    <Link to="/pedidos">Pedidos</Link>

                    <Link to="/informes">Informes</Link>

                </nav>

            </header>

            <Routes>

                <Route path="/" element={<Inicio />} />

                <Route path="/productos" element={<Productos/>}/>

                <Route path="/clientes" element={<Clientes/>}/>

                <Route path="/pedidos" element={<Pedidos />} />

                <Route path="/informes" element={<Informes />} />

            </Routes>

        </div>

    )

}

export default App;