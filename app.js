// Dependencias, librerías y declaraciones
const readline = require("readline"); // ReadLine
const { Client, Authenticator } = require('minecraft-launcher-core'); // Minecraft Launcher Core
const fs = require('fs'); // FS
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); // Interfaz de lectura y escritura


// Preguntas
rl.question("¿Que versión quieres jugar? ", (version) => { // Pregunta de versión

    const ver = String(version); // Guardar respuesta string

    rl.question("¿Con que nombre quieres jugar? ", (nombre) => { // Pregunta de nombre

    const name = String(nombre); // Guardar respuesta string

    rl.question("¿Cómo quieres jugar? (vanilla o forge) ", (mods) => {
    
    const modstof = String(mods).toLowerCase();

    if (modstof == "vanilla") {

    // Opciones de Minecraft

    if (ver === ver) { // Fue lo mayor que se me ocurrio para esperar a la respuesta del usuario
        const launcher = new Client();
        
        
        let opts = {
            authorization: Authenticator.getAuth(name), // name = nombre del usuario
            root: "./minecraft", // Carpeta de instalación
            version: {
                number: ver, // Ver = versión del juego
                type: "release"
            },
            window: {
            fullscreen: false, 
            },
            memory: {       // TODO: Añadir opción de cambiar la memoria desde el launcher 
                max: "3G", // ram máxima 
                min: "1G" // ram minima
            }
        }
        
        launcher.launch(opts);
        
        launcher.on('debug', (e) => console.log(e));
        launcher.on('data', (e) => console.log(e));
    }
        rl.close();
    } else if (modstof == "forge") {
            if (ver === ver) { // Fue lo mayor que se me ocurrio para esperar a la respuesta del usuario
        const launcher = new Client();
        
        
        let opts = {
            authorization: Authenticator.getAuth(name), // name = nombre del usuario
            root: "./minecraft", // Carpeta de instalación
            version: {
                number: ver, // Ver = versión del juego
                type: "release",
                custom: "forge-" + ver,
            },
            window: {
            fullscreen: false, 
            },
            memory: {       // TODO: Añadir opción de cambiar la memoria desde el launcher 
                max: "3G", // ram máxima 
                min: "1G" // ram minima
            }
        }
        
        launcher.launch(opts);
        
        launcher.on('debug', (e) => console.log(e));
        launcher.on('data', (e) => console.log(e));
            }}})})});




    // me quiero suicidar ayuda