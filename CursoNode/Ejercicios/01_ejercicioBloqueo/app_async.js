/**
 * @description: bloqueo de código asíncrono
 */

//-----------------Importaciones-------------
const fs = require("fs");

//-----------------Declaración de variables-------------

//----------------Ejecución-----------------
console.log("Esto se ejecuta en primer lugar");
const data = fs.readFile("./info.txt","utf-8", (err,data) => err ? console.error(err) : console.log("Data -->", data));
console.log("Esto se ejecuta al final")