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

export const editarProducto = async (id, producto) => {

    return await fetch(`${URL}/productos/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(producto)

    });

};

export const obtenerClientes = async () => {

    const respuesta = await fetch(`${URL}/clientes`);

    return await respuesta.json();

};

export const guardarCliente = async (cliente) => {

    return await fetch(`${URL}/clientes`, {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(cliente)

    });

};

export const eliminarCliente = async (id) => {

    return await fetch(`${URL}/clientes/${id}`, {

        method: "DELETE"

    });

};

export const editarCliente = async (id, cliente) => {

    return await fetch(`${URL}/clientes/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(cliente)

    });

};

// Obtener pedidos
export const obtenerPedidos = async () => {
    const respuesta = await fetch(`${URL}/pedidos`);
    return await respuesta.json();
};

// Guardar pedido
export const guardarPedido = async (pedido) => {
    return await fetch(`${URL}/pedidos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pedido)
    });
};

export const eliminarPedido = async (id) => {

    return await fetch(`${URL}/pedidos/${id}`, {

        method: "DELETE"

    });

};

export const obtenerInformes = async () => {

    const respuesta = await fetch(`${URL}/informes`);

    return await respuesta.json();

};