import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

const Usuario = sequelize.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      // defaultValue: true,
    },
  },
  {
    timestamps: false,
  }
);

export default Usuario;
