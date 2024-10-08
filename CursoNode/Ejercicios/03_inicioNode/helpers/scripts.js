/**
 * @description: Calculadora
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number}
 */
const sumar = (a,b) => a+b;
const restar = (a,b) => a-b;
const multiplicar= (a,b) => a*b;
const dividir = (a,b) => b ? b/a : "No se puede dividir por 0";
const modulo = (a,b) => b ? a%b : "No se puede dividir por 0";

//EXPORTACION CON ***CommonJS***

/*
const calculadora = {
    sumar: sumar,
    restar: restar,
    multiplicar: multiplicar,
    dividir: dividir,
    modulo, modulo
};
*/

//Caracteristicas ES6 y posterior
//Si el nombre de la clave coincide con el nombre de la funcion se puede:
const calculadora = {
    sumar,
    restar,
    multiplicar,
    dividir,
    modulo
};
module.exports = calculadora; //Exportacion con CommonJS