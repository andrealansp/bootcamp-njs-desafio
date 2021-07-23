import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://xhvgpmzc:wSBXIQfTJT7m68olQZ9yIS3PHa1AwA8P@batyr.db.elephantsql.com/xhvgpmzc",
  {
    dialect: "postgres",
    logging: false,
  }
);

export default sequelize;
