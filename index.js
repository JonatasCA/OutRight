import express from "express";
import appRouter from "./routes/index.js";
import "./database/index.js"
import { connectToDatabase } from "./database/index.js";
const app = express();


app.use(express.json())

app.use("/api/v1/products", appRouter);

const PORT = process.env.PORT || 5000;

connectToDatabase().then(() => {
    app.listen(PORT, () => console.log(`Servidor iniciado na porta: ${PORT}`));
}).catch((err) => {
    console.log("Ocorreu um erro durante a conexão com o banco de dados!", err);
    process.exit(0);
});
