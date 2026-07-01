const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema({

    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cliente",
        required: true
    },

    productos: [

        {
            producto: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Producto",
                required: true
            },

            cantidad: {
                type: Number,
                required: true
            }
        }

    ],

    total: {
        type: Number,
        required: true
    },

    fecha: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Pedido", pedidoSchema);