import { fetchDataCharacters, urlData } from "./helpers/script";


//const datos = fetchDataCharacters(urlData);




setTimeout(()=>{
    const arrChar = datos.flat();
    arrChar.forEach((elem,index) => {
        if(index<16){
            elem.img=`https://starwars-visualguide.com/assets/img/characters/${index+1}.jpg`
        }else{
            elem.img=`https://starwars-visualguide.com/assets/img/characters/${index+2}.jpg`
        }

    });
    console.log(arrChar);
},10000);