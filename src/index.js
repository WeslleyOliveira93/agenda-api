import "dotenv/config";
import express from "express";
import cors from "cors";
import authenticate from "./database/connection.js";
import agendamentosRoutes from "./routes/agendamentosRoutes.js";

authenticate();

const servidor = express();

servidor.use(cors({ origin: "*" }));
servidor.use(express.json());

servidor.use(agendamentosRoutes);


servidor.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ mensagem: "Ocorreu um erro interno." });
});

const PORT = process.env.PORT || 3000;
servidor.listen(PORT, () => {
    console.log(`Servidor em execução na porta ${PORT}!`);
});
