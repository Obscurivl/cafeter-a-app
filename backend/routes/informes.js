const express = require("express");
const router = express.Router();

const Producto = require("../models/Producto");
const Cliente = require("../models/Cliente");
const Pedido = require("../models/Pedido");

router.get("/", async (req, res) => {

    try {

        const cantidadProductos = await Producto.countDocuments();

        const cantidadClientes = await Cliente.countDocuments();

        const cantidadPedidos = await Pedido.countDocuments();

        const pedidos = await Pedido.find();

        let ventasTotales = 0;

        pedidos.forEach((pedido) => {

            ventasTotales += pedido.total;

        });

        res.json({

            cantidadProductos,
            cantidadClientes,
            cantidadPedidos,
            ventasTotales

        });

    } catch (error) {

        res.status(500).json({

            mensaje: error.message

        });

    }

});

module.exports = router;