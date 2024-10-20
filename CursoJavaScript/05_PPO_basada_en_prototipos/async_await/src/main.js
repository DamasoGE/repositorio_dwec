import { fetchDataUsersAsync, fetchDataUsersPromise } from "./helpers/script";


// async function pru() { //En forma de funcion tradicional
//     try {
//         const data = await fetchDataUsersAsync();
//         console.log(data);
//     } catch (error) {    
//     }
// }
// pru()

fetchDataUsersAsync()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

(async () => {
    await fetchDataUsersAsync();
    })()
