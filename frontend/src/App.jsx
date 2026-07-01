import "./App.css";


import { Routes, Route, Link } from "react-router-dom";

import Productos from "./pages/Productos";
import Clientes from "./pages/Clientes";
import Pedidos from "./pages/Pedidos";

function App(){

    return(

        <div className="container">

            <header>

                <h1>☕ Sistema de Cafetería</h1>

                <nav>

                    <Link to="/">Productos</Link>

                    <Link to="/clientes">Clientes</Link>

                    <Link to="/pedidos">Pedidos</Link>

                </nav>

            </header>

            <Routes>

                <Route path="/" element={<Productos/>}/>

                <Route path="/clientes" element={<Clientes/>}/>

                <Route path="/pedidos" element={<Pedidos />} />

            </Routes>

        </div>

    )

}

export default App;