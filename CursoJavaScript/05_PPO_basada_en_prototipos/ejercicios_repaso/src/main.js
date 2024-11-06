//---------------IMPORTACIONES-----------------//

import { crearProducto, getProductos, modifyProductos } from "./helpers/crudbasico";
import { fetchUserDataAsync, fetchUserDataPromise, saveLocalStorage } from "./helpers/ejercicio1";
import { fetchPostWithErrorAsync, fetchPostWithErrorPromise } from "./helpers/ejercicio2";
import { fetchMultipleResourcesPromises } from "./helpers/ejercicio3";

//---------------DECLARACION DE VARIABLES------//
const url = import.meta.env.VITE_URL;
const urlusers = `${import.meta.env.VITE_URL}/users`;
const urlinvalida = `${import.meta.env.VITE_URL}/null`;
const urldata = import.meta.env.VITE_URL_DATA;

const ejercicio = "CRUD"

if(ejercicio==="CRUD"){

// EJERCICIO 1: CREAR PRODUCTO //
const producto = {
    nombre: "addProducto",
    stock: 5,
    precio: 5.99,
    categoriaId: 3
}

//crearProducto(urldata,producto);


//EJERCICIO 2: OBTENER PRODUCTOS //

// const productos = await getProductos();
// console.log(productos);

//EJERCICIO3: MODIFICAR PRODUCTOS //

modifyProductos(urldata,3,"ordenador",10, 500, 5)


}else{
    //--------------------EJERCICIO 1--------------//

    fetchUserDataPromise(urlusers)
        .then( data => console.log(data))
        .catch((error)=> console.log("Error:", error));

    const init1 = async (url)=>{
        const data = await fetchUserDataAsync(url)
        saveLocalStorage("usuario",data);
        console.log(data);
    }
    init1(urlusers)
    //--------------------EJERCICIO 2--------------//

    fetchPostWithErrorPromise(urlinvalida)
        .then(data => console.log(data))
        .catch((error)=> console.log("Error:", error));

    const init2 = async (url) =>{
        const data = await fetchPostWithErrorAsync(url)
        console.log(data);
    }
    init2(urlinvalida)
    //--------------------EJERCICIO 3--------------//

    fetchMultipleResourcesPromises(url,"users","posts","comments")
        .then( data => console.log(data))
        .catch((error)=> console.log("Error:", error));
}