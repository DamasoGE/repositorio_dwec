//1. Guardar y Recuperar un Array de Objetos: Crea una función que acepte
// un array de objetos (con nombre y edad), guarde este array en
// LocalStorage y luego lo recupere. Verifica si el array ya está guardado y
// evita duplicados.*/
/**
 * @description
 */
export const ejer1 = (arrObj) => {
    localStorage.clear();
    if(!Array.isArray(arrObj)){
        throw new Error("Los argumentos no son válidos")
    }

    const arrObjSinDuplicados = [...new Set(arrObj)]; //quitar duplicados

    localStorage.setItem("usuarios",JSON.stringify(arrObjSinDuplicados));

    console.log(JSON.parse(localStorage.getItem("usuarios")));

    return localStorage.hasOwnProperty("usuarios");
}

// 2. Validar Datos antes de Guardar en LocalStorage: Crea una función que
// acepte un array de objetos, donde cada objeto tiene nombre y edad .
// Valida que nombre sea una cadena no vacía y edad sea un número
// mayor que 0 antes de almacenarlo en LocalStorage .
/**
 * @description
 */
export const ejer2 = (arrObj) => {
    localStorage.clear();
    if(!Array.isArray(arrObj)) 
        throw new Error("El argumento no es un array");

    arrObj.forEach((elem)=> {
        if(!(typeof elem.nombre == 'string' && typeof elem.edad === 'number' && elem.edad>0)) 
            throw new Error("Los argumentos no son válidos");
    })
   
    const arrObjSinDupl = [...new Set(arrObj)]; //quitar duplicados
    localStorage.setItem("usuarios",JSON.stringify(arrObjSinDupl));
    console.log(JSON.parse(localStorage.getItem("usuarios")));
    return localStorage.hasOwnProperty("usuarios");

}

// 3. Actualizar un Objeto dentro del Array en LocalStorage: Crea una
// función que permita actualizar la edad de una persona en un array de
// objetos almacenado en LocalStorage , buscando a la persona por
// nombre.
/**
 * @description
 */
export const ejer3 = (key,name,age) => {
    if(typeof key  !== "string" || typeof name  !== "string" || typeof age !== "number" || !localStorage.hasOwnProperty(key))
        throw new Error("Los argumentos no son válidos");

    const data = JSON.parse(localStorage.getItem(key));
    
    data.some((elem)=>{ //Sigue mientras no se devuelva true
        if(elem.nombre == name){
            elem.edad = age;
            return true;
        }
    })

    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(data));
}

// 4. Eliminar un Objeto del Array en LocalStorage: Crea una función que
// permita eliminar un objeto del array almacenado en LocalStorage ,
// buscando por el nombre de la persona.
/**
 * @description
 */
export const ejer4 = (key, name) => {
    if(typeof key  !== "string" || typeof name  !== "string" || !localStorage.hasOwnProperty(key))
        throw new Error("Los argumentos no son válidos");

    const data = JSON.parse(localStorage.getItem(key));

    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(data.filter((elem)=> elem.nombre!=name)));
}

// 5. Mostrar los Datos en el DOM: Crea una función que recupere el array de
// objetos almacenado en LocalStorage y muestre los datos en una lista
// dentro de un <div> con el id app.
/**
 * @description
 */
export const ejer5 = (key) => {
    if(typeof key  !== "string" || !localStorage.hasOwnProperty(key))
        throw new Error("El argumento no es válido");

    const data = JSON.parse(localStorage.getItem(key));

    let div = Object.assign(document.createElement('div'),{id: 'app'})
    // let div = document.createElement('div')
    // div.id='app';
    document.body.appendChild(div);

    let lista = document.createElement('ul')

    data.forEach((elem) => {
        let item = document.createElement('li');
        item.textContent = `Nombre: ${elem.nombre}, Edad: ${elem.edad}`;
        lista.appendChild(item);
    })

    div.appendChild(lista);
}

// 6. Guardar un Set en LocalStorage: Crea una función que acepte un Set
// de números, lo convierta a un array para almacenarlo en LocalStorage ,
// y luego lo recupere y lo convierta nuevamente en un Set .
/**
 * @description
 */
export const ejer6 = (numSet) => {
    if(numSet instanceof Set){
        numSet.forEach((elem)=>{if(typeof elem != 'number') 
            throw new Error("El argumento no es válido");
        })
    }
    const arrnum = [...numSet];
    localStorage.setItem('numeros',JSON.stringify(arrnum));
    const data = JSON.parse(localStorage.getItem('numeros'));
    const dataset = new Set([...data]) 
}

// 7. Guardar y Recuperar un Map en LocalStorage: Crea una función que
// acepte un Map , lo convierta a un array de pares clave-valor, lo almacene en
// LocalStorage y luego lo recupere y vuelva a convertir en Map .
export const ejer7 = (mapObj) => {
    const arr = new Array();
    mapObj.forEach((valor,clave) => {
        arr.push([clave,valor])
    })

    localStorage.setItem('usuariosmap',JSON.stringify(arr));
    const data = JSON.parse(localStorage.getItem('usuariosmap'))
    const datamap = new Map(data.map((elem)=>[elem[0],elem[1]]))
}

// 8. Desestructuración de Objetos desde LocalStorage: Crea una función
// que recupere un array de objetos desde LocalStorage y use la
// destructuración para acceder a los nombres de las personas y mostrar solo
// los nombres en el DOM.
/**
 * @description
 */
export const ejer8 = () => {

}

// 9. Validación de Datos con Operadores Ternarios: Crea una función que
// acepte un array de objetos, donde cada objeto tiene nombre y edad . Si
// algún objeto tiene un nombre vacío o una edad menor a 18, no lo
// almacena en LocalStorage y devuelve un mensaje indicando qué
// objetos son inválidos.

// 10. Actualización Condicional en LocalStorage con Funciones: Crea una
// función que acepte un array de objetos y almacene solo aquellos objetos
// cuyo nombre no esté ya almacenado en LocalStorage . Usa una función
// para verificar la existencia y almacenar los nuevos objetos.