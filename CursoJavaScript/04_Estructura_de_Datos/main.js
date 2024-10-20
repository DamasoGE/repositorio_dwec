//Import nombrado
import {saludar, saludar2, evaluar} from './helpers/basicos.js';
import{} from './helpers/relacion_arrays_1_2.js'
import{} from './helpers/relacion_basicos.js'
import{ dec1, buscarPorCiudad } from './helpers/deconstruccion.js'
import{ users } from './data/usuarios.js'
import { almacenarlocalstorage, findLS, keyCheck, modifyPrimeroLS, modifyTodosLS, modifyUltimoLS } from './helpers/localstore.js'
import { ejer1, ejer2, ejer3, ejer4, ejer5, ejer6, ejer7, ejer8, ejer9, ejer10 } from './helpers/relacion_localstorage.js'

// ---------------Inicio de la Aplicación---------------//




// ----------------EJERCICIOS DE LOCALSTORAGE ------------------ //
const usuarios = [
    {nombre:"Damaso", edad:34},
    {nombre:"Pedro", edad:66},
    {nombre:"Damaso", edad: 22},
    {nombre:"Damaso", edad: 22},
    {nombre:"Damaso", edad: 22}
]

// const usuariosmap = new Map(usuarios.map(usuario => [usuario.nombre,usuario.edad]));



almacenarlocalstorage(usuarios,"usuarios");

console.log(keyCheck("usuarios"));

findLS("usuarios","Damaso");

modifyLocal1("usuarios","Damaso","javier")

modifyTodosLS










// console.log(ejer2(usuarios));
// console.log(ejer3("usuarios","Damaso",10))
// console.log(ejer4("usuarios", "Pedro"))
// console.log(ejer5("usuarios"))
// console.log(ejer6(new Set([1,2,4,4,9])))
// console.log(ejer7(usuariosmap))
// console.log(ejer8("usuarios"))
// console.log(ejer9("usuarios",[{nombre: "Luis", edad:15},{nombre:"", edad:25},{nombre:"Julia", edad:40}]))
// console.log(ejer10("usuarios",[{nombre: "Luis", edad:15},{nombre:"Marta", edad:25},{nombre:"Julia", edad:40}]))