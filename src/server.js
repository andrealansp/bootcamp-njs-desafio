import app from "./app.js";
import db from "./repositories/db_postgres.js";
import winston from "winston";
import { connect } from "./repositories/db_mongoose.js";

// Confiurando o Logger para a aplicação
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "onlineLibrary.log" }),
  ],
  format: combine(label({ label: "online-library" }), timestamp(), myFormat),
});

// Realizando o Sync do Banco de Dados
(async () => {
  try {
    await db.sync();
    await connect();
  } catch (e) {
    throw e;
  }
})();

// Iniciando a API
app.listen(3001, () => {
  console.log("Api Iniciada com Sucesso, escutando a porta 3001");
});
