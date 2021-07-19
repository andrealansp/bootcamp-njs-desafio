import Sequelize from "sequelize";
import db from "../repositories/db_postgres.js";

const Autor = db.define(
  "autores",
  {
    autorId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  },{timestamp:false}
);

export default Autor;
