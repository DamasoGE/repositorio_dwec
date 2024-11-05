//---------------IMPORTACIONES-----------------//

import { fetchUserDataAsync, fetchUserDataPromise, saveLocalStorage } from "./helpers/ejercicio1";
import { fetchPostWithErrorAsync, fetchPostWithErrorPromise } from "./helpers/ejercicio2";
import { fetchMultipleResourcesPromises } from "./helpers/ejercicio3";

//---------------DECLARACION DE VARIABLES------//
const url = import.meta.env.VITE_URL;
const urlusers = `${import.meta.env.VITE_URL}/users`;
const urlinvalida = `${import.meta.env.VITE_URL}/null`;

//--------------------EJERCICIO 1--------------//

fetchUserDataPromise(urlusers)
    .then( data => console.log(data))
    .catch((error)=> console.log("Error:", error));

const init1 = async (url)=>{
    const data = await fetchUserDataAsync(url)
    saveLocalStorage("usuario",data);
    console.log(data);
}

//--------------------EJERCICIO 2--------------//

fetchPostWithErrorPromise(urlinvalida)
    .then(data => console.log(data))
    .catch((error)=> console.log("Error:", error));

const init2 = async (url) =>{
    const data = await fetchPostWithErrorAsync(url)
    console.log(data);
}

//--------------------EJERCICIO 3--------------//

fetchMultipleResourcesPromises(url,"users","posts","comments")
    .then( data => console.log(data))
    .catch((error)=> console.log("Error:", error));



//---------------INICIO APLICACION-------------//

init1(urlusers)
init2(urlinvalida)