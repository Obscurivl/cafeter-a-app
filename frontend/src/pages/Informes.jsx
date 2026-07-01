import { useEffect, useState } from "react";
import { obtenerInformes } from "../services/api";

function Informes() {

    const [datos, setDatos] = useState(null);

    useEffect(() => {

        cargarInformes();

    }, []);

    const cargarInformes = async () => {

        const respuesta = await obtenerInformes();

        setDatos(respuesta);

    };

    if (!datos) {

        return <h2>Cargando...</h2>;

    }

    return (

        <div>

            <h2>📊 Informes</h2>

            <div className="card">

                <h3>Productos registrados</h3>

                <p>{datos.cantidadProductos}</p>

            </div>

            <div className="card">

                <h3>Clientes registrados</h3>

                <p>{datos.cantidadClientes}</p>

            </div>

            <div className="card">

                <h3>Pedidos realizados</h3>

                <p>{datos.cantidadPedidos}</p>

            </div>

            <div className="card">

                <h3>Ventas totales</h3>

                <p>${datos.ventasTotales}</p>

            </div>

        </div>

    );

}

export default Informes;