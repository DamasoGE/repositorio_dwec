/**
 * @description: función qu realiza una petición a una API 
 * https://jsonplaceholder.typicode.com/todos/
 * 
 * */
const urlData = import.meta.env.VITE_API_URL;

export const fetchDataUsersPromise = () => {
    return fetch(urlData) //El fetch me devuelve una promesa
        .then((response)=>{
            if(!response.ok){
                throw new Error("Error en la petición");
            }
            return response.json(); //Devuelve ya el JSON parseado
        })
        .then((data)=>{return data;}) //Este then se refiere a la segunda promesa encadenada
        .catch((error)=>{console.log("Error data access: ", error);});
}

export const fetchDataUsersAsync = async () => {
    try{ //Es necesario puesto que no hay estructura .catch
        const response = await fetch(urlData);
        if(!response.ok){
            throw new Error("Error en la petición")
        }
        const data = await response.json();
        return data;
    } catch(error) {

    }
};

//export async function funcionasincrona(){}; si queremos escribir una función en forma tradicional

