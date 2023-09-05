import express, { Application } from "express";
import morgan from "morgan";
import useRoutes from "../routes/usuario";
import cors from "cors";

import sequelize from "../db/connection";

import "./usuario";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/usuarios",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    // Metodos iniciales
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  // Conectar base de datos
  async dbConnection() {
    try {
      await sequelize.authenticate();
      await sequelize.sync({ force: true });
      console.log("Database online");
    } catch (error) {
      if (typeof error === "string" || typeof error === "undefined") {
        throw new Error(error);
      }
    }
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Morgan
    this.app.use(morgan("dev"));

    // Lectura del body
    this.app.use(express.json());

    // Carpeta pública
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, useRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default Server;
