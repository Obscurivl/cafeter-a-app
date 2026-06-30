const mongoose = require("mongoose");

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("✅ MongoDB conectado correctamente");
    } catch (error) {
        console.log("❌ Error al conectar MongoDB");
        console.error(error);
        process.exit(1);
    }
};

module.exports = conectarDB;