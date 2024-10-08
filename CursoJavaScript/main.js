//Import nombrado
import {saludar, saludar2, evaluar} from './helpers/script.js';
import{} from './helpers/ejercicios1.js'
import{ dec1, buscarPorCiudad } from './helpers/deconstruccion.js'
import{ users } from './data/usuarios.js'

// ---------------Inicio de la Aplicación---------------//

document.addEventListener('DOMContentLoaded', () => {
    saludar();
    console.log(saludar2("Damaso3"));
})

console.log(buscarPorCiudad(users,"McKenziehaven"));