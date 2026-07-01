import { useEffect, useState } from "react";

import FormularioProducto from "../components/FormularioProducto";
import ListaProductos from "../components/ListaProductos";

import {
    obtenerProductos,
    guardarProducto,
    eliminarProducto,
    editarProducto,
} from "../services/api";

function Productos() {
    const [productos, setProductos] = useState([]);
    const [productoEditar, setProductoEditar] = useState(null);

    const cargarProductos = async () => {
        const datos = await obtenerProductos();
        setProductos(datos);
    };

    const actualizarProducto = async (producto) => {

        await editarProducto(productoEditar._id, producto);

        setProductoEditar(null);

        cargarProductos();

    };

    useEffect(() => {
        cargarProductos();
    }, []);

    const agregarProducto = async (producto) => {
        await guardarProducto(producto);
        cargarProductos();
    };

    const borrarProducto = async (id) => {
        if (!window.confirm("¿Eliminar producto?")) return;

        await eliminarProducto(id);
        cargarProductos();
    };

    return (
        <div style={{ padding: "30px", fontFamily: "Arial" }}>
            <h1>☕ Sistema de Cafetería</h1>

            <FormularioProducto
                guardar={productoEditar ? actualizarProducto : agregarProducto}
                productoEditar={productoEditar}
            />

            <ListaProductos
                productos={productos}
                eliminar={borrarProducto}
                editar={setProductoEditar}
            />
        </div>
    );
}

export default Productos;