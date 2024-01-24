import { Server } from "./presentation/server";

(async () => main())();

function main() {
    const serve= new Server().start();

}
