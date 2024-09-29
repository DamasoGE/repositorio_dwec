//---------------Declaración de funciones---------------//

/**
 * @autor: autor
 * @version: 1.0.0
 * @description: Esta función imprime un mensaje de saludo.
 * @param: no tiene parámetros
 * Debe estar pegada a su propia función principal.
 */
export function saludar(){
    console.log('Hola, mundo!');
}

/**
 * @description: Funcion que saluda.
 * @param {String} nombre 
 * @returns {String}
 */
export function saludar2(nombre){
    return `Bienvenido ${ nombre ?? "desconocido"}!`;
}

//Crear funcion que pase un numero y que diga si es positivo, negativo o cero

/**
 * @description : Funcion que evalua un numero y devuelve un mensaje indicando si es positivo, negativo o cero.
 * @param {Number} numero 
 * @returns {String}
 */
export function evaluar(numero){
    return typeof numero == "number"? (numero === 0? " Es Cero" : (numero > 0? "Numero Positivo" : "Numero Negativo")) : "Error: No es un número";
}

//Crear una funcion que comprueba si un numero es primo. Dicha funcion debe ser un arrow function. Si no se le pasa nada, por defecto es cero.

/**
 * @description : Funcion que evalua si un numero es primo.
 * @param {Number} numero 
 * @returns {Boolean}
 */
export const esPrimo = (num=0)=> { //num=0, parametro por defecto sea 0
    let numbool = true;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++){
        if (num % i === 0) numbool = false;
    }
    return numbool;
};

/**
 * @description : Funcion que calcula el factorial de un numero.
 * @param {Number} num 
 * @returns {Number}
 */
export const factorial = (num=0)=> {
    return num >0 ? ( num === 0 || num === 1 ? 1: num* factorial(num-1)): "Error: No se puede calcular el factorial de un número negativo";
}

/**
 * @description : Funcion que resuelve las soluciones de un segundo grado.
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 * @returns 
 */
export const segundogrado = (a, b, c) => {
    let discriminante = (b**2) - (4*a*c);
    return discriminante > 0? `Las soluciones son: ${(-b + Math.sqrt(discriminante))/(2*a)} y ${(-b - Math.sqrt(discriminante))/(2*a)}` : null;
}

//Dado un array de numeros calcular maximo, minimo, el promedio y la mediana. (Funcion Math, puede ser que necesitemos el spread operator para trabajar con arrays)

/**
 * @description : Funcion que calcula estadisticas de un array de numeros.
 * @param {Array} arr 
 */
export const calculaEstadisticas = (arr) => {
    arr = arr.sort();
    let maximo = Math.max(...arr);
    let minimo = Math.min(...arr);
    //let promedio = arr.reduce((a,b) => a + b, 0) / arr.length;
    let promedio = 0;
    arr.forEach(value => promedio += value);
    promedio /= arr.length;
    let mediana = arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)]; //según el signo de a-b decide si se cambia el orden de los elementos.
    return  `Maximo: ${maximo}, Minimo: ${minimo}, Promedio: ${promedio}, Mediana: ${mediana}`;
}

/**
 * @description : Funcion que calcula los numeros pares de un array de numeros.
 * @param {Array} arr 
 */
const esPar = numeros => numeros.filter(numero => numero %2 === 0);

/**
 * @description : Funcion que muestra el ultimo numero impar de un array de numeros.
 * @param {Array} arr 
 * @returns {Number}
 */
export const lastImpar = numerosArray => numerosArray.filter(numero => numero % 2!==0).pop(); //Usamos el método pop() para obtener el último elemento de un array y filter() para filtrar los impares.


/**
 * 
 * @param {*} numerosArray 
 * @returns {Number}
 */
export const lastImpar2 = numerosArray => numerosArray.findLast(numero => numero % 2 !== 0); //Usamos el método findLast() para obtener el último elemento de un array que cumpla la condición.



//Crear una funcion que le pase el array y el nombre de una ciudad y como tercer parámetro new ciudad. 
//Busca la ciudad en el array y la reemplaza con la nueva ciudad, devolviendo el array con la ciudad reemplazada
//Si no hay ciudad en el array, me dirá no encuentro "new ciudad" en array.

/**
 * @description : Funcion que reemplaza una ciudad en un array.
 * @param {Array} arr 
 * @param {String} city 
 * @param {String} newCity 
 * @returns {Array}
 */

export const replaceCity = (arrCity, oldCity, newCity) => arrCity.map( city => city === oldCity ? newCity : city); //Usamos el método map() para recorrer el array y reemplazar las ciudades que coincidan con la antigua con la nueva.


//EJERCICIOS DE TRANSACCIONES 1

const transacciones = [
    {id:1,mont:8,direcion:'0xabc'},
    {id:2, mont:15, direccion:'0xdfe'},
    {id:3, mont: 22, direccion:'0xjkl'},
    {id:4, mont: 11, direccion: '0xmnq'}
]

/**
 * @description : Funcion que filtra transacciones con un mont mayor a 12.
 * @param {Array} arrayTrans 
 * @param {Number} num  - mont a filtrar
 * @returns 
 */
export const filtrado = (arrayTrans, num) => {
    const filtro = arrayTrans.filter(trans => trans.mont > num);
    return filtro.sort((a,b) => b.mont - a.mont);
}

/**
 * @description: Funcion que cuenta cuantas transacciones son mayores y menores al mont de la transacción con dirección dada
 * @param {*} arrayTrans 
 * @param {*} direction 
 * @returns 
 */
export const mayormenortrans = (arrayTrans, direction) => {
    let trandir =arrayTrans.filter(trans => trans.direccion === direction)[0];
    let morecount =0, lesscount=0;

    for(const trans of arrayTrans){
        if(trans.mont > trandir.mont) morecount++;
        if(trans.mont < trandir.mont) lesscount++;
    }
    return `nº transacciones mayores: ${morecount}, nº transacciones menores: ${lesscount}`
}

//console.log(filtrado(transacciones,12));
//console.log(mayormenortrans(transacciones,'0xmnq'));

//EJERCICIOS DE TRANSACCIONES 2

//Validacion de la integridad de una cadena de bloques. El prevhash debe coincidir con el Hash de la previo. Salida, true o false.
//Verificar que todos los bloques mantienen la integridad
const bloques = [
    {id:1,hash:"abc123",prevHas:null},
    {id:1,hash:"def456",prevHas:'abc123'},
    {id:1,hash:"ghi789",prevHas:'def456'},
    {id:1,hash:"jkl012",prevHas:'ghi789'}
  ]

/**
 * @description : Funcion que valida la integridad de los bloques.
 * @param {Array} arrayBloques 
 * @returns {Boolean}  - true si todos los bloques tienen la integridad, false en caso contrario.
 */

const verintegridad = (arrayBloques) => {
    let integridad = true;
    for(let i = 1; i < arrayBloques.length; i++){
        console.log(`Hash: ${arrayBloques[i-1].hash}; PrevHash: ${arrayBloques[i].prevHas}`);
        if(arrayBloques[i-1].hash !== arrayBloques[i].prevHas) integridad = false;
    }
    return integridad;
}


const numeros = [2,5,8,1,3,0,7,4,9];

/**
 * @description: usando reduce obten el máximo
 */
const maximo = (arrayNum) => 
 arrayNum.reduce((acc, num) => 
        acc = num>acc ? num:acc
    ,arrayNum[0]);

console.log(maximo(numeros));

// transacciones[0]?.propiedad (Sirve para comprobar si esa clave existe)
// if(transacciones[0]?.propiedad) SENTENCIA