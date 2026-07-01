require("dotenv").config();
const rutasProductos = require("./routes/productos");
const rutasClientes = require("./routes/clientes");
const rutasPedidos = require("./routes/pedidos");

const express = require("express");
const cors = require("cors");

const conectarDB = require("./config/db");

const app = express();

conectarDB();

app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());
app.use("/productos", rutasProductos);
app.use("/clientes", rutasClientes);
app.use("/pedidos", rutasPedidos);

app.get("/", (req, res) => {
    res.send("☕ API de Cafetería funcionando");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor iniciado en http://localhost:${PORT}`);
});