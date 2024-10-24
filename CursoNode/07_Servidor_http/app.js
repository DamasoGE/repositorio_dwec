/**
 * Crear un servidor web que responda según la ruta
 */

const http = require('http');

//Creamos el servidor

const serverHlanzWeb = http.createServer((req, res)=>{
    const url = req.url //<-- capturamos la URL que el cliente nos ha slicitado al servidor
    if(url==="/"){
        res.statusCode=200; 
        res.setHeader("Content-Type","text/plain"); 
        // <-- text/plain   text/html   application/json
        res.end("Bienvenido a mi servidor HLANZ. Usted está en la página principal.\n");
    } else if (url==="/about"){
        res.statusCode=200; 
        res.setHeader("Content-Type","text/plain"); 
        res.end("Bienvenido a mi servidor HLANZ. Usted está en Acerca de.\n");
    } else {
        res.statusCode=404; 
        res.setHeader("Content-Type","text/plain"); 
        res.end("Page not found.\n");
    }
});

//Elegimos el puerto

const port = 5000;

serverHlanzWeb.listen(port,()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
})