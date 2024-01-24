import express from "express";



export class Server {
  private app = express();

  async start() {
    ///* middleware

    //* Public Folder

    this.app.use(express.static("public"));

    this.app.listen(3000, "0.0.0.0", function () {
      console.log("Starter")
    });
  }
}
