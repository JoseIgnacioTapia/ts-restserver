import express, { Application } from "express";

import useRoutes from "../routes/usuario";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/usuarios",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    // Definir mis rutas
    this.routes();
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
