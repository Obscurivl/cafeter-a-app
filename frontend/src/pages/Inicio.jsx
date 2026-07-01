import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="inicio">

      <h1>Bienvenido al Sistema</h1>

      <p>Seleccione un módulo:</p>

      <div className="menu-principal">

        <Link className="boton-menu" to="/productos">
          📦 Productos
        </Link>

        <Link className="boton-menu" to="/clientes">
          👤 Clientes
        </Link>

        <Link className="boton-menu" to="/pedidos">
          🛒 Pedidos
        </Link>

        <Link className="boton-menu" to="/informes">
          📊 Informes
        </Link>

      </div>

    </div>
  );
}

export default Inicio;