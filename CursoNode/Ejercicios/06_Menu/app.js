/**
 * @description: programa que permita manejar la E/S de una data usuarios.json
 * a traves de un menu.
 * La data será: {nombre: string, edad: number}
 * El programa permitirá:
 * -Añadir usuarios.
 * -Listar los usuarios.
 * -Salir.
 * *** Buscar usuario por nombre.
 * *** Eliminar usuario por nombre.
 * Dependencias: colors, js, readLine-sync.
 */
const colors = require('colors');
const fs = require('fs');
const readline = require('readline-sync')


console.clear();

//----------------------DECLARACIÓN DE VARIABLES------------------------//

const pathUserData = "./data/usuarios.json" 

//-----------------------DECLARACIÓN DE FUNCIONES-----------------------//

function addUser(username){
    console.clear();
    const name = readline.question("Ingrese el nombre del usuario: ".yellow);
    user = searchUser(name);
}

function loadDataJSON(path){
    try{
        const data = fs.readFile(path,'utf8');
   
    }catch(error){
        console.error("Error al leer el fichero de usuarios", error);
    }
    return JSON.parse(data);
}

function saveDataJSON(){}

function listUsers(){}

function searchUser(findUser, path){
    loadDataJSON(path);



}

function deleteUser(){}

function menu(){
    console.clear();
    console.log("===============================".green);
    console.log("    Aplicacion de Usuarios".green);
    console.log("===============================".green);
    console.log("1. Agregar Usuario".green);
    console.log("2. Listar Usuarios".green);
    console.log("3. Eliminar Usuario".green);
    console.log("4. Salir".green);
    const option = readline.questionInt("Seleccione una opcion: ".yellow);

    switch(option){
        case 1:
            console.log("hola1");
            break;
        case 2:
            console.log("hola2");
            break;
        case 4:
            console.log("Gracias por usar la app".green)
            return false; //salir de la aplicación
        default:
            console.log("Opción inválida".red);
    }
}

//-----------------------INICIO DE LA APLICACION-----------------------//


menu();