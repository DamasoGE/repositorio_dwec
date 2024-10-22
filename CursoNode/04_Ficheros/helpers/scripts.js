const fs = require('fs'); //importar librería de file system. Require es para importar paquetes antiguos
const os = require('os');

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
         console.log(`Contenido: ${data}`);
        })
    });
}

//EJERCICIO 3: Renombrar el archivo datos1.txt a datos2.txt
const ejercicio3 = (file,text) => {
    fs.access(file, fs.F_OK, (err) => {
        if(err) throw err
        fs.rename(file,text, (err)=>{
            if(err) throw err;
            console.log("Cambiado el nombre correctamente");
        })
    });
}


//EJERCICIO 4: Eliminar el archivo datos2.txt
const ejercicio4 = (file) => {
    fs.access(file, fs.F_OK, (err) => {
        if(err) throw err
        fs.unlink(file, (err)=>{
            if(err) throw err;
            console.log("Archivo borrado correctamente");
        })
    });
}

//EJERCICIO 5: Crea una carpeta llamada Datos y dentro de ella crea un archivo llamado info.txt
//que muestre información del sistema operativo
const ejercicio5 = () => {
    if (!fs.existsSync('Datos')){
        fs.mkdirSync('Datos')
    };

    const info = 
    `Información del sistema operativo:
        - Nombre del SO: ${os.type()}
        - Versión del SO: ${os.release()}
        - Plataforma: ${os.platform()}
        - Memoria libre: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB
        - Memoria total: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
        - Arquitectura: ${os.arch()}
        `;

    fs.writeFile('Datos/info.txt',info, (err)=>{
        if(err) throw err;
        console.log("Archivo creado y salvado");
    })
}

//EJERCICIO 6: https://jsonplaceholder.typicode.com/posts
// Utilizando la variable usuarios del fichero usuarios.js, se pide:
//Crear un fichero llamado usuarios.txt que almacene los post de los usuarios con id 1 y 2
const ejercicio6 = (arrayObj) => {
    const objfilter = arrayObj.filter((elem)=> elem.userId==1 || elem.userId==2);
    let text = "        ";

    objfilter.forEach((elem)=>{
        text+=`userId= ${elem.userId}
        title= ${elem.title}
        body= ${elem.body}

        `;
    })

    fs.writeFile('usuarios.txt',text, (err)=>{
        if(err) throw err;
        console.log("Archivo creado y salvado");
    })
}

//EJERCICIO 7:
// Utilizando la variale usuarios del fichero usuarios.js, se pide:
// Crear una funcion que pasándole el id del usuario y devuelva los posts del usuario
// además crearé un fichero llamado usuario_id.txt con los post de dichos usuario.
const ejercicio7 = (arrayObj,num) => {
    const objfilter = arrayObj.filter((elem)=> elem.userId==num);
    let text = "        ";

    objfilter.forEach((elem)=>{
        text+=`userId= ${elem.userId}
        title= ${elem.title}
        body= ${elem.body}

        `;
    })

    fs.writeFile(`usuarios_${num}.txt`,text, (err)=>{
        if(err) throw err;
        console.log("Archivo creado y salvado");
    })
}

module.exports = { ejercicio1, ejercicio2, ejercicio3, ejercicio4, ejercicio5, ejercicio6, ejercicio7 };