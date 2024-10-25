import { fetchDataCharacters, fetchDataCharAsync, VITE_API_URL, fetchAllCharacterPromiseAll, fetchAllCharacterPromiseSettled } from "./helpers/script.js";


//const datos = fetchDataCharacters(urlData);

// setTimeout(()=>{
//     const arrChar = datos.flat();
//     arrChar.forEach((elem,index) => {
//         if(index<16){
//             elem.img=`https://starwars-visualguide.com/assets/img/characters/${index+1}.jpg`
//         }else{
//             elem.img=`https://starwars-visualguide.com/assets/img/characters/${index+2}.jpg`
//         }

//     });
//     console.log(arrChar);
// },3000);

document
    .getElementById("fetching-characters-async")
    .addEventListener("click",()=>fetchAllCharacterPromiseSettled());


    

// const datos = await fetchDataCharAsync(urlData)
//     .then((data) =>{
//         const arrChar2 = data.flat()
//         arrChar2.forEach((elem,index) => {
//             if(index<16){
//                 elem.img=`https://starwars-visualguide.com/assets/img/characters/${index+1}.jpg`
//             }else{
//                 elem.img=`https://starwars-visualguide.com/assets/img/characters/${index+2}.jpg`
//             }    
//         })
//         console.log(arrChar2)
//     })

//     .catch((error) => console.log(error));
