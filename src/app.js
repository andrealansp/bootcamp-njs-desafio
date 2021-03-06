import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import clienteRouter from "./routes/cliente.route.js";
import livroRouter from "./routes/livro.route.js";
import autorRouter from "./routes/autor.route.js";
import vendaRouter from "./routes/venda.route.js";

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

const app = express();
app.use(express.json());
app.use("/cliente", clienteRouter);
app.use("/autor", autorRouter);
app.use("/livro", livroRouter);
app.use("/venda", vendaRouter);
app.use(cors());
app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res
    .status(400)
    .send({ error: err.message, filename: err.filename, line: err.lineNumber });
});

export default app;
