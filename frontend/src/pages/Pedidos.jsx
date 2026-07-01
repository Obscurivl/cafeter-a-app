import { useEffect, useState } from "react";

import {
  obtenerClientes,
  obtenerProductos,
  guardarPedido,
} from "../services/api";

function Pedidos() {
  const [clientes, setClientes] = useState([]);
  const [productos, setProductos] = useState([]);

  const [cliente, setCliente] = useState("");
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    const listaClientes = await obtenerClientes();
    const listaProductos = await obtenerProductos();

    setClientes(listaClientes);
    setProductos(listaProductos);
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
    </div>
  );
}

export default Pedidos;