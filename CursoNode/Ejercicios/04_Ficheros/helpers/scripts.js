const fs = require('fs'); //importar librería de file system. Require es para importar paquetes antiguos


//EJERCICIO 1: fs para crear un archivo llamado datos1.txt y que almacene la informacion:
//"Lorem impum dolor sit amte, consectetur adipiscing elit"
const ejercicio1 = (text) => {
    fs.writeFile('datos1.txt',text, (err)=>{
        if(err) throw err;
        console.log("Archivo creado y salvado");
    })
};

//EJERCICIO 2: Leer el archivo datos1.txt y mostar su contenido en consola
const ejercicio2 = (file) => {
    fs.access(file, fs.F_OK, (err) => {
       if(err) throw err

        fs.readFile(file, "utf-8",(err,data) =>{
            if(err) throw err;
         console.log(data)
        })
    });
}

//EJERCICIO 3: Renombrar el archivo datos1.txt a datos2.txt

//EJERCICIO 4: Eliminar el archivo datos2.txt

//EJERCICIO 5: Crea una carpeta llamada Datos y dentro de ella crea un archivo llamado info.txt
//que muestre información del sistema operativo

//EJERCICIO 6: https://jsonplaceholder.typicode.com/posts
// Utilizando la variale usuarios del fichero usuarios.js, se pide:
//Crear un fichero llamado usuarios.txt que almacene los post de los usuarios con id 1 y 2

//EJERCICIO 7:
// Utilizando la variale usuarios del fichero usuarios.js, se pide:
// Crear una funcion que pasándole el id del usuario y devuelva los posts del usuario
// además crearé un fichero llamado usuario_id.txt con los post de dichos usuario.

module.exports = { ejercicio1, ejercicio2 };