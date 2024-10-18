//https://swapi.dev/api/people Sacar el peso y la altura

//https://starwars-visualguide.com/assets/img/characters/

const urlData = "https://swapi.dev/api/people?page=";
const urlDataImg = "https://starwars-visualguide.com/assets/img/characters/"

//Crea dos funciones (promesa y async-away) que obtengan los personajes de la página de starwars (nombre, altura y la url imagen).

/**
 * @description:
 */
export const fetchDataCharacters = () => {
    const max=9;
    let datos= new Array();

    for(let i=1; i<=max; i++){
         fetch(`${urlData}${i}`) //El fetch me devuelve una promesa
        .then((response)=>{
            if(!response.ok){
                throw new Error("Error en la petición");
            }
            return response.json(); //Devuelve ya el JSON parseado
        })
        .then((data)=>{
                datos = datos.concat(data.results);
                return datos;
        }) //Este then se refiere a la segunda promesa encadenada
        .catch((error)=>{console.log("Error data access: ", error);});
    }
}

