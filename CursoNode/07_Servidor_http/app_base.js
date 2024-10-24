/**
 * Creación de un servidor HTTP en NodeJS
 * Utilidad
 * -Responder a solicitudes WEB
 * -Realizar peticiones WEB, pudiendo funcionar como cliente
 */


const http = require("http");

// -------------UNA FORMA DE CREARLO-----------//
const serverHlanz1 = http.createServer((req,res)=>{
    //La función que ejecutamos aquí se realiza para cada solicitud que hagamos
    res.statusCode=200; // <--- 200 = Todo OK
    res.setHeader("Content-Type","text/plain"); // <-- Establece el tipo de contenido
    res.end("Bienvenido a mi servidor 1") //<--- Respuesta que envía el servidor
});


//-------------OTRA FORMA DE CREARLO-----------//
const serverHlanz2 = http.createServer((req,res)=>{
    //Configurar el tipo de respuesta
    res.writeHead(200,{"Content-type":"text/plain"}); // <--Configurar la respuesta
    res.write("Bienvenido a mi servidor 2 HTTP con NodeJS") // <--Escribir el contenido de la respuesta
    res.end(); //<--Finalizar la respuesta
});

const port1=3000; // <--Defino el número de puerto que voy a utilizar
const port2=4000

//Hacemos que el servidor escuche en el puerto que le hemos indicado
serverHlanz1.listen(port1,()=>{
    console.log(`Servidor 1 ejecutándose a través de la dirección http://localhost:${port1}`)
})

serverHlanz2.listen(port2,()=>{
    console.log(`Servidor 2 ejecutándose a través de la dirección http://localhost:${port2}`)
})