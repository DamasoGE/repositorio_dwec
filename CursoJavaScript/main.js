//Import nombrado
import {saludar, saludar2, evaluar} from './helpers/script.js';
import{} from './helpers/ejercicios1.js'
import{ dec1, buscarPorCiudad } from './helpers/deconstruccion.js'
import{ users } from './data/usuarios.js'
import { almacenarlocalstorage } from './helpers/localstore.js'

// ---------------Inicio de la Aplicación---------------//

const usuarios = [
    {nombre:"Damaso", id:33},
    {nombre:"Pedro", id:66}
]

console.log(almacenarlocalstorage(usuarios,"usuarios"));