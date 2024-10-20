//https://swapi.dev/api/people Sacar el peso y la altura

//https://starwars-visualguide.com/assets/img/characters/

export const urlData = "https://swapi.dev/api/people?page=";
const urlDataImg = "https://starwars-visualguide.com/assets/img/characters/"

//Crea dos funciones (promesa y async-away) que obtengan los personajes de la página de starwars (nombre, altura y la url imagen).

/**
 * @description:
 */
export const fetchDataCharacters = (path) => {
    const max=9;
    let datos= new Array();

    for(let i=1; i<=max; i++){
        fetch(`${path}${i}`).then((response)=>{
            if(!response.ok){
                throw new Error("Error en la petición");
            }
            return response.json(); //Devuelve ya el JSON parseado
        })
        .then((data)=>{
                datos[i] = data.results;
        }) //Este then se refiere a la segunda promesa encadenada
        .catch((error)=>{console.log("Error data access: ", error);});
    }
        return datos;
}


/**
 * @description: usando async await
 */
export const fetchDataCharAsync = async (path) => {
    const max=9;
    let datos= new Array();
    try{ //Es necesario puesto que no hay estructura .catch
        for(let i=1; i<=max; i++){
            const response = await fetch(`${path}${i}`);
            if(!response.ok){
                throw new Error("Error en la petición")
            }
            const datapi = await response.json();
            datos[i] = datapi.results;
        }
        return datos;

    } catch(error) {

    }

};