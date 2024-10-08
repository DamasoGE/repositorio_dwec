//ejercicio1: crear funcion "calcTotalPrize" que obtenga el total de los productos incluyendo el iva.
//parametros: array de productos que tenga precio

import { products } from "../data/products.js";

/**
 * @description: obtiene el valor total de los productos incluyendo el iva.
 * @param {Array}
 * @returns {Number}
 */
export const calcTotalPrice = (products) =>{
    let cont = 0;
    products.map((product) => product.price!== undefined ? cont+=product.priceIva: 0);
    return cont;
}

//ejercicio2: crear objeto "productsIva" que añada todos los elementos de product una nueva clave iva de cada producto.
//parametros: objeto product y un numero iva.
//esta función debe de verificar que el objeto tiene la clave "prize".

/**
 * @description: añade iva a los productos
 */
export const productsIva = (products, iva) => {
    products.map((product) => {
        return {...product, priceIva: product.price * iva}});
    //products.map((producto) => producto.priceIva=producto.price*iva);
    //return products;
}