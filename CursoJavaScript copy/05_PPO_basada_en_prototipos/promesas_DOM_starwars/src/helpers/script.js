//https://swapi.dev/api/people Sacar el peso y la altura

//https://starwars-visualguide.com/assets/img/characters/

export const VITE_API_URL = import.meta.env.VITE_API_URL;
const VITE_IMG_URL = import.meta.env.VITE_IMG_URL;

//Crea dos funciones (promesa y async-away) que obtengan los personajes de la página de starwars (nombre, altura y la url imagen).

/**
 * @description:
 */
export const fetchDataCharacters = (path) => {
    const max=9;
    let datos= new Array();

    for(let i=1; i<=max; i++){
        console.log(`${path}?page=${i}`)
        fetch(`${VITE_API_URL}?page=${path}${i}`).then((response)=>{
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
    let allCharacters = [];
    let hasNext = true;
    let currentPage=1;
    try{ //Es necesario puesto que no hay estructura .catch

        while(hasNext){
            const response = await fetch(`${path}?page=${currentPage}`);
            if(!response.ok){
                throw new Error("No se pudo obtener la información de la API");
            };
            const data = await response.json();
            allCharacters = allCharacters.concat(data.results);

            hasNext = data.next != null;
            currentPage++;
        }
        localStorage.setItem("StarWars",JSON.stringify(allCharacters));

        //-----------RENDERIZAMOS EL DOM-----------//
        renderCharacters(allCharacters);

        //------------MI FORMA------------//
        //const max=9;
        //let datos= [];
        // for(let i=1; i<=max; i++){
        //     const response = await fetch(`${path}?page=${i}`);
        //     if(!response.ok){
        //         throw new Error("Error en la petición");
        //     }
        //     const datapi = await response.json();
        //     datos[i] = datapi.results;
        // }
        // return datos;
        //-------------------------------//

    } catch(error) {

    }

};

/**
 * @description: function render characters
 */
function renderCharacters(characters){
    //1- Seleccionamos donde vamos a renderiar los personajes.
    const resultDiv = document.getElementById("app");

    resultDiv.innerHTML="";
    //2- Iteramos sobre el array de personajes.
    characters.forEach((character,index) =>{
        //Creamos un DIV para cada personaje
        const characterDiv = document.createElement("div");
        characterDiv.className = "character";
        characterDiv.innerHTML=`
        <h2>${character.name}</h2>
        <img src="${VITE_IMG_URL}${index<16 ? index+1:index+2}.jpg" alt="${character.name}" width="200px">
        <p>Altura: ${character.height}</p>
        `
        //Añadimos el characterDiv (hijo) al resultDiv (padre)
        resultDiv.appendChild(characterDiv);

    })

}