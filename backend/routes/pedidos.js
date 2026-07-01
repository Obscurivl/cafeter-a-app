const express = require("express");
const router = express.Router();

const Pedido = require("../models/Pedido");
const Cliente = require("../models/Cliente");
const Producto = require("../models/Producto");

// Obtener todos los pedidos
router.get("/", async (req, res) => {
  try {
    const pedidos = await Pedido.find()
      .populate("cliente")
      .populate("productos.producto");

    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
});

// Crear un pedido
router.post("/", async (req, res) => {
  try {
    const { cliente, productos } = req.body;

    // Verificar que el cliente exista
    const clienteExiste = await Cliente.findById(cliente);

    if (!clienteExiste) {
      return res.status(404).json({
        mensaje: "Cliente no encontrado",
      });
    }

    let total = 0;

    for (const item of productos) {
      const producto = await Producto.findById(item.producto);

      if (!producto) {
        return res.status(404).json({
          mensaje: "Producto no encontrado",
        });
      }

      if (producto.stock < item.cantidad) {
        return res.status(400).json({
          mensaje: `Stock insuficiente para ${producto.nombre}`,
        });
      }

      total += producto.precio * item.cantidad;

      // Descontar stock
      producto.stock -= item.cantidad;
      await producto.save();
    }

    const pedido = new Pedido({
      cliente,
      productos,
      total,
    });

    await pedido.save();

    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
});

// Eliminar pedido
router.delete("/:id", async (req, res) => {
  try {
    await Pedido.findByIdAndDelete(req.params.id);

    res.json({
      mensaje: "Pedido eliminado",
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
});

module.exports = router;