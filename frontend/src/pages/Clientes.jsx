import { useEffect, useState } from "react";

import {
  obtenerClientes,
  guardarCliente,
  eliminarCliente,
  editarCliente
} from "../services/api";

function Clientes() {

  const [clientes, setClientes] = useState([]);
  const [clienteEditando, setClienteEditando] = useState(null);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {

    cargarClientes();

  }, []);

  const cargarClientes = async () => {

    const datos = await obtenerClientes();

    setClientes(datos);

  };

  const guardar = async () => {

    if (!nombre || !apellido || !telefono || !email) {

      alert("Complete todos los campos");

      return;

    }

    const cliente = {
      nombre,
      apellido,
      telefono,
      email
    };

    if (clienteEditando) {

      await editarCliente(clienteEditando, cliente);

      alert("✅ Cliente actualizado");

    } else {

      await guardarCliente(cliente);

      alert("✅ Cliente agregado");

    }

    setNombre("");
    setApellido("");
    setTelefono("");
    setEmail("");
    setClienteEditando(null);

    cargarClientes();

  };

  const eliminar = async (id) => {

    if (!window.confirm("¿Eliminar cliente?")) return;

    await eliminarCliente(id);

    cargarClientes();

  }

  const editar = (cliente) => {

    setNombre(cliente.nombre);
    setApellido(cliente.apellido);
    setTelefono(cliente.telefono);
    setEmail(cliente.email);

    setClienteEditando(cliente._id);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };

  return (

    <div>

      <h2>👤 Clientes</h2>

      <input
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={guardar}>
        {clienteEditando ? "Actualizar Cliente" : "Guardar Cliente"}
      </button>

      <hr />

      <h2>Clientes registrados</h2>

      {clientes.map(cliente => (

        <div className="card" key={cliente._id}>

          <h3>

            {cliente.nombre} {cliente.apellido}

          </h3>

          <p>

            📞 {cliente.telefono}

          </p>

          <p>

            ✉ {cliente.email}

          </p>

          <button
            onClick={() => editar(cliente)}
          >

            Editar

          </button>

          <button
            className="eliminar"
            onClick={() => eliminar(cliente._id)}
          >

            Eliminar

          </button>

        </div>

      ))}

    </div>

  );

}

export default Clientes;