//Import nombrado
import {saludar, saludar2, evaluar} from './helpers/script.js';
import{} from './helpers/ejercicios1.js'
import{ dec1, buscarPorCiudad } from './helpers/deconstruccion.js'
import{ users } from './data/usuarios.js'
import { almacenarlocalstorage } from './helpers/localstore.js'
import { ejer1, ejer2, ejer3, ejer4, ejer5, ejer6, ejer7} from './helpers/ejercicioslocalstorage.js'

// ---------------Inicio de la Aplicación---------------//

const usuarios = [
    {nombre:"Damaso", edad:34},
    {nombre:"Pedro", edad:66},
    {nombre:"Kevin", edad: 22}
]

const usuariosmap = new Map(usuarios.map(usuario => [usuario.nombre,usuario.edad]));

console.log(ejer2(usuarios));
console.log(ejer3("usuarios","Damaso",10))
console.log(ejer4("usuarios", "Pedro"))
console.log(ejer5("usuarios"))
console.log(ejer6(new Set([1,2,4,4,9])))
console.log(ejer7(usuariosmap))