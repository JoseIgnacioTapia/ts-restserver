import dotenv from "dotenv";
dotenv.config();

import { Sequelize } from "sequelize";
const { DB_PASSWORD } = process.env;

const sequelize = new Sequelize("node", "postgres", DB_PASSWORD, {
  host: "localhost",
  dialect: "postgres",
  // logging: false;  Desactivar despúes
});

export default sequelize;
