import { fetchDataCharacters } from "./helpers/script";



fetchDataCharacters()
    .then((data) => console.log(data.results))
    .catch((error) => console.log(error));