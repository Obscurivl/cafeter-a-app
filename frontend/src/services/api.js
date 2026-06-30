const URL = "http://localhost:5000";

export const obtenerProductos = async () => {
    const respuesta = await fetch(`${URL}/productos`);
    return await respuesta.json();
};

export const guardarProducto = async (producto) => {

    return await fetch(`${URL}/productos`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(producto)

    });

};

export const eliminarProducto = async (id) => {

    return await fetch(`${URL}/productos/${id}`, {

        method: "DELETE"

    });

};