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

const pathUserData = './data/usuarios.json';
const info = null;

//-----------------------DECLARACIÓN DE FUNCIONES-----------------------//

function addUser(username,edad){
        const arr = loadDataJSON(pathUserData);
        console.log(arr.push({nombre: username, edad: edad}));
        saveDataJSON(arr, pathUserData);
}

function searchUser(findUser, path){
    const user = loadDataJSON(path).filter((elem)=> elem.nombre==findUser);
    return user.length > 0;
}

function loadDataJSON(path){
    try{
        const data = fs.readFileSync(path,'utf8');
        return JSON.parse(data);
    }catch(error){
        console.error("Error al leer el fichero de usuarios", error);
    }

}

function saveDataJSON(arr, path){
    try{
        fs.writeFileSync(path,JSON.stringify(arr),'utf8');
        console.log("Usuario guardado correctamente");
        }catch(error){
            console.error("Error al leer el fichero de usuarios", error);
    }
}

function listUsers(){}

function deleteUser(){}

function menu(info){
    do{
        console.clear();
        info!=null ? console.log(info.yellow): info=null

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
                const name = readline.question("Ingrese el nombre del usuario: ".yellow);
                if(!searchUser(name,pathUserData)){
                    const edad = readline.question("Ingrese la edad del usuario: ".yellow);
                    addUser(name, edad);
                }else{
                    info = "Ya existe un usuario con ese nombre";
                }
                break;
            case 2:
                console.log("listar");
                break;
            case 3:
                console.log("eliminar");
                break;
            case 4:
                console.log("Gracias por usar la app".green)
                return false; //salir de la aplicación
            default:
                console.log("Opción inválida".red);
        }
    }while(true);
}

//-----------------------INICIO DE LA APLICACION-----------------------//


menu();