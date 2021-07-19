import Sequelize from "sequelize";
import db from "../repositories/db_postgres.js";
import Autor from "./autor.model.js";

const Livro = db.define(
  "livros",
  {
    livroId: {
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
    valor: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    estoque: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    autorId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
  },{timestamp:false}
);

Livro.BelongsTo(Autor, {foreignKey: autorId});

export default Livro;
