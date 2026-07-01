import { useState, useEffect } from "react";

function FormularioProducto({ guardar, productoEditar }) {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");

    useEffect(() => {

        if (productoEditar) {

            setNombre(productoEditar.nombre);
            setDescripcion(productoEditar.descripcion);
            setCategoria(productoEditar.categoria);
            setPrecio(productoEditar.precio);
            setStock(productoEditar.stock);

        }

    }, [productoEditar]);

    const enviarFormulario = () => {
        guardar({
            nombre,
            descripcion,
            categoria,
            precio: Number(precio),
            stock: Number(stock),
        });

        setNombre("");
        setDescripcion("");
        setCategoria("");
        setPrecio("");
        setStock("");
    };

    return (
        <div className="formulario">
            
            <h2>Agregar Producto</h2>

            <input
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <br /><br />

            <input
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
            />

            <br /><br />

            <input
                placeholder="Categoría"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
            />

            <br /><br />

            <button onClick={enviarFormulario}>

                {productoEditar ? "Actualizar Producto" : "Guardar Producto"}

            </button>

            <hr />
        </div>
    );
}

export default FormularioProducto;