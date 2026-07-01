function ListaProductos({ productos, eliminar, editar }) {
    return (
        <div className="lista">
            <h2>Productos</h2>

            {productos.length === 0 ? (
                <p>No hay productos.</p>
            ) : (
                productos.map((producto) => (
                    <div className="card"
                        key={producto._id}
                        style={{
                            border: "1px solid gray",
                            padding: "10px",
                            marginBottom: "10px",
                        }}
                    >
                        <h3>{producto.nombre}</h3>

                        <p>{producto.descripcion}</p>

                        <p>Categoría: {producto.categoria}</p>

                        <p>Precio: ${producto.precio}</p>

                        <p>Stock: {producto.stock}</p>

                        <button className="eliminar" onClick={() => eliminar(producto._id)}>
                            Eliminar
                        </button>

                        <button className="editar" onClick={() => editar(producto)}>
                            Editar
                        </button>

                    </div>
                ))
            )}
        </div>
    );
}

export default ListaProductos;