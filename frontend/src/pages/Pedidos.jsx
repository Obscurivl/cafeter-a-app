import { useEffect, useState } from "react";

import {
  obtenerClientes,
  obtenerProductos,
  guardarPedido,
  obtenerPedidos,
  eliminarPedido
} from "../services/api";

function Pedidos() {
  const [clientes, setClientes] = useState([]);
  const [productos, setProductos] = useState([]);
  const [pedidos, setPedidos] = useState([]);

  const [cliente, setCliente] = useState("");
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    const listaClientes = await obtenerClientes();
    const listaProductos = await obtenerProductos();
    const listaPedidos = await obtenerPedidos();

    setClientes(listaClientes);
    setProductos(listaProductos);
    setPedidos(listaPedidos);
  };

  const guardar = async () => {
    if (!cliente || !producto || cantidad <= 0) {
      alert("Complete todos los campos");
      return;
    }

    const pedido = {
      cliente,
      productos: [
        {
          producto,
          cantidad: Number(cantidad),
        },
      ],
    };

    const respuesta = await guardarPedido(pedido);

    if (respuesta.ok) {
      alert("✅ Pedido guardado correctamente");

      setCliente("");
      setProducto("");
      setCantidad(1);
      cargarDatos();

    } else {
      const error = await respuesta.json();
      alert(error.mensaje);
    }
  };

  const eliminar = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este pedido?")) {
      const respuesta = await eliminarPedido(id);

      if (respuesta.ok) {
        alert("✅ Pedido eliminado correctamente");
        cargarDatos();
      } else {
        const error = await respuesta.json();
        alert(error.mensaje);
      }
    }
  };

  return (
    <div className="formulario">
      <h2>🛒 Nuevo Pedido</h2>

      <select
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
      >
        <option value="">Seleccione un cliente</option>

        {clientes.map((c) => (
          <option key={c._id} value={c._id}>
            {c.nombre} {c.apellido}
          </option>
        ))}
      </select>

      <br /><br />

      <select
        value={producto}
        onChange={(e) => setProducto(e.target.value)}
      >
        <option value="">Seleccione un producto</option>

        {productos.map((p) => (
          <option key={p._id} value={p._id}>
            {p.nombre} - Stock: {p.stock}
          </option>
        ))}
      </select>

      <br /><br />

      <input
        type="number"
        min="1"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />

      <br /><br />

      <button onClick={guardar}>
        Guardar Pedido
      </button>

      <hr />

      <h2>Pedidos realizados</h2>

      {pedidos.map((pedido) => (

        <div
          key={pedido._id}
          className="card"
        >
          <h3>
            Cliente: {pedido?.cliente?.nombre || "Sin nombre"} {pedido?.cliente?.apellido || ""}
          </h3>

          <p>
            Fecha: {new Date(pedido.fecha).toLocaleDateString()}
          </p>

          <p>
            Hora: {new Date(pedido.fecha).toLocaleTimeString()}
          </p>

          {pedido?.productos?.map((item, index) => (
            <p key={index}>
              {item?.producto?.nombre || "Producto eliminado"} - Cantidad: {item?.cantidad}
            </p>
          ))}

          <strong>

            Total: ${pedido.total}

          </strong>

          <br /><br />

          <button
            className="eliminar"
            onClick={() => eliminar(pedido._id)}
          >
            Eliminar Pedido
          </button>

        </div>

      ))}
    </div>
  );
}

export default Pedidos;