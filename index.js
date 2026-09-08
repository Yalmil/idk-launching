// Dependencias, librerías y declaraciones
const { Client, Authenticator } = require('minecraft-launcher-core'); // Minecraft Launcher Core

    if (ver === ver) { // Fue lo mayor que se me ocurrio para esperar a la respuesta del usuario
        const launcher = new Client();
        
        
        let opts = {
            authorization: Authenticator.getAuth("yal"), // name = nombre del usuario
            root: "./minecraft", // Carpeta de instalación
            version: {
                number: 1.12, // Ver = versión del juego
                type: "release"
            },
            window: {
            fullscreen: false, 
            },
            memory: {       // TODO: Añadir opción de cambiar la memoria desde el launcher 
                max: "6G", // ram máxima 
                min: "4G" // ram minima
            }
        }
        
        launcher.launch(opts);
        
        launcher.on('debug', (e) => console.log(e));
        launcher.on('data', (e) => console.log(e));
    }
        


    // me quiero suicidar ayuda