import express from "express";
import { envs } from "../config/envs";

export class Server {
  private app = express();

  async start() {
    ///* middleware

    //* Public Folder

    this.app.use(express.static("public"));

    this.app.listen(envs.PORT, "0.0.0.0", function () {
      console.log("Starter")
    });
  }
}
