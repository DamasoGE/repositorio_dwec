/**
 * @description: bloqueo de código síncrono
 */

//-----------------Importaciones-------------
const fs = require("fs");

//-----------------Declaración de variables-------------

//----------------Ejecución-----------------
console.log("Esto se ejecuta en primer lugar");
const data = fs.readFileSync("./info.txt","utf-8");
console.log("Data -->", data);
console.log("Esto se ejecuta al final")