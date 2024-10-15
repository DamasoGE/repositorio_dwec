//Dado el siguiente array de objetos:
const usuarios = [
    {nombre:"Damaso", edad:33},
    {nombre:"Pedro", edad:66}
]
/* 1. Crear una funcion llamada almacenarlocalstorage que le pase como parámetro un array
y como segundo parámetro una cadena de texto (clave). Automaticamente realizará:
-Comprobará que los parametros insertados son un array y una cadena de texto.
-Comprobará si existe o no la clave en el localstorage y lo almacena dentro del localstore, si existe la clave mensaje de error.

NOTA: Para introducir una estructura de datos debe utilizarse JSON.Stringuify() y para sacarlo JSON.parse() */
/**
 * @description: almacena en localstorage un objeto.
 */
export const almacenarlocalstorage = (arr,key) => {
    localStorage.clear();
    if(!Array.isArray(arr) || typeof key  !== "string" || localStorage.hasOwnProperty(key)){
        throw new Error("Los argumentos no son válidos")
    }
    localStorage.setItem(key,JSON.stringify(arr));
    return localStorage.hasOwnProperty(key);
}

/* 2. Crear una función que le pase como parámetro una cadena texto (clave) y automaticamente realice las siguientes acciones:
-Comprueba que he pasado como parámetro una cadena de texto.
-Verifica si la cadena de texto es una clave del local store. Si no es una clave, mensaje de error "No existe la clave que deseas buscar".*/

/* 3. Crear una función que le pase como parámetros un string (clave), un string (texto a buscar) y automaticamente realice las siguientes acciones:
-Buscará dentro de la clave del localstorage el elemento que le pasemos como segundo parámetro.*/

/*4. Crear una función que le pase como parámetros un string (clave), usuario y un string (newid) y automaticamente realice las siguientes acciones:
-Si existe, modificará la id del usuario:
-Primera ocurrencia
-A todos
-Ultima ocurrencia*/
/**
 * @description
 */
export const modifyLocal = (keyFind, userName, newId) => {
    if(typeof key  !== "string" || typeof userName  !== "string" || typeof newId !== "string" || !localStorage.hasOwnProperty(key)){
        throw new Error("Los argumentos no son válidos")
    }

    const miData = JSON.parse(localStorage.getItem(keyFind));
    


}