const express = require("express");
const router = express.Router();

const Cliente = require("../models/Cliente");

// Obtener todos los clientes
router.get("/", async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
});

// Obtener un cliente por ID
router.get("/:id", async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);

        if (!cliente) {
            return res.status(404).json({ mensaje: "Cliente no encontrado" });
        }

        res.json(cliente);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
});

// Crear cliente
router.post("/", async (req, res) => {
    try {
        const cliente = new Cliente(req.body);
        await cliente.save();

        res.status(201).json(cliente);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
});

// Editar cliente
router.put("/:id", async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(cliente);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
});

// Eliminar cliente
router.delete("/:id", async (req, res) => {
    try {
        await Cliente.findByIdAndDelete(req.params.id);

        res.json({ mensaje: "Cliente eliminado" });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
});

module.exports = router;