

// RELACIÓN I: `Arrays` en JavaScript.

// Ejercicio 1: Suma de Arrays
//Escribe una función llamada `sumaArrays` que tome dos arrays `arr1` y `arr2` del mismo tamaño. La función debe devolver un nuevo array que contenga la suma de los elementos correspondientes de `arr1` y `arr2`.

/**
 * @description: suma de arrays
 */
const sumaArrays = (arr1,arr2) => arr1.map((num, index) => num + arr2[index]);
//console.log(sumaArrays([1,2,3],[4,5,6]));

// Ejercicio 2: Duplicados
// Define una función llamada `eliminarDuplicados` que tome un array `arr`. La función debe eliminar los elementos duplicados y devolver un nuevo array con elementos únicos, manteniendo el orden original.
/**
 * @description: devuelve un array que toma elementos únicos de dos arrays
 */
const eliminarDuplicados = (arr1, arr2) => {
    let arrtotal=arr1.concat(arr2);
    return arrtotal.filter((element, index) => arrtotal.indexOf(element) === index);
    //NOTA: indexOf da el índice del primer elemento que contiene el contenido "element", si no coincide con el índice es porque está repetido.
    // Por lo tanto los índices son diferentes y da false, dejando fuera ese valor.
}
//console.log(eliminarDuplicados([1,2,3,4],[1,3,4,5]))

// Ejercicio 3: Filtrar Pares
// Crea una función llamada `filtrarPares` que tome un array de números `arr` y devuelva un nuevo array que contenga solo los números pares.
/**
 * @description: filtra de un array los número pares
 */
const filtrarpares = (arr) => arr.filter((num) => num % 2 == 0);
//console.log(filtrarpares([1,2,3,4,5,10,11,12])) ;

// Ejercicio 4: Unión de Arrays
// Escribe una función llamada `unirArrays` que acepte un número variable de arrays y los combine en uno solo. Nota: Se podría utilizar el método `reduce` y el método `concat` para lograrlo.
/**
 * @description: une una cantidad variable de arrays y los combina en uno solo
 */
const unirArrays = (...arr) => arr.flat();
console.log(unirArrays(['ene','feb','mar'],['lun','mar','mie']))

// Ejercicio 5: Conteo de Palabras
// Define una función llamada `contarPalabras` que tome una cadena de texto `texto` y devuelva un objeto que cuente cuántas veces aparece cada palabra en el texto.
/**
 * @description: devuelve un objeto que dice cuantas veces aparece cada palabra en un texto.
 */
const contarPalabras = (texto) =>{
    let arr = texto.toLowerCase().split(" ");
    let cont = []; 
    const objeto = {};
    arr.filter((palabra, index) => arr.indexOf(palabra) == index ? cont[index]=1 : cont[arr.indexOf(palabra)]+=1);
    arr.forEach((palabra, index) => cont[index]!=null ? objeto[palabra] = cont[index] : null);
    return objeto;
};
//console.log(contarPalabras("Tres tristes tigres comian tristes el trigo en el tres trigales con tres tigres"))

//  Ejercicio 6: Ordenar Números
// Crea una función llamada `ordenarNumeros` que tome un array de números `arr` y lo ordene de menor a mayor .
/**
 * @description: ordena los número de menor a mayor
 */
const ordenarNumeros = (arr) => arr.sort((a,b) => a - b);
//console.log(ordenarNumeros([1,5,15,10,7,3,0]));

// Ejercicio 7: Eliminar Elementos
// Escribe una función llamada `eliminarElemento` que tome un array `arr` y un elemento `elemento`, y elimine la primera aparición de ese elemento en el array.
/**
 * @description: elimina primer elemento llamado "elemento" del array
 */
const eliminarElemento = (arr, elemento) => {
    arr.map((rec,index) =>{if(rec == elemento) arr.splice(index,1)});
    return arr;
}
//console.log(eliminarElemento(['ene','feb','mar','abr'], 'abr'));

// Ejercicio 8: Máximo y Mínimo
// Define una función llamada `encontrarMaxMin` que tome un array de números `arr` y devuelva un objeto con las propiedades `max` y `min`, que contengan el valor máximo y mínimo del array, respectivamente.
/**
 * @description: encuentra el numero máximo y mínimo de un array y devuelve los valores como un objeto
 */
const encontrarMaxMin = (arr) => {
    const objeto = {};
    objeto.max = Math.max(...arr);
    objeto.min = Math.min(...arr);
    return objeto;
};
//console.log(encontrarMaxMin([1,2,3,4,5,6]));

// Ejercicio 9: Buscar Elemento
// Crea una función llamada `buscarElemento` que tome un array `arr` y un elemento `elemento`. La función debe devolver el índice de la primera aparición de `elemento` en el array, o -1 si no se encuentra.
/**
 * @description: busca la primera posición de aparición de "elemento" o devuelve -1
*/
const buscarElemento = (arr,elemento) => arr.indexOf(elemento);
console.log(buscarElemento("tres tristes tigres comían trigo en un triste trigal".split(" "),"triste"))

// Ejercicio 10: Dividir en fragmentos.
// Escribe una función llamada `dividirFragmento` que tome un array `arr` y un número entero `tamano`. La función debe dividir el array en fragmentos de tamaño `tamano` y devolver un nuevo array con los Fragmentos.
