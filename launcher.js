const { Client, Authenticator } = require('minecraft-launcher-core');
const launcher = new Client();

let opts = {
    authorization: Authenticator.getAuth("yal"),
    root: "./minecraft", // Ruta a tu carpeta de Minecraft
    version: {
        number: "1.12",        // La versión base de Minecraft
        type: "release",         // El tipo, puede ser "release" o "snapshot"
        custom: "1.12.2-forge-14.23.5.2859" // El nombre de tu versión personalizada
    },
    memory: {
        max: "4G",
        min: "2G"
    }
};

launcher.launch(opts);

launcher.on('debug', (e) => console.log(e));
launcher.on('data', (e) => console.log(e));