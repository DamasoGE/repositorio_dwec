/**
 * @description: recoge los datos de una API dada una url inválida
 * @param {String} url 
 * @returns {Array<Object>}
 */
export const fetchPostWithErrorPromise = (url) =>{
    const errorArray = [];
    return fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error("Error en respuesta")
        }
        return response.json()
    })
    .then((data)=> data)
    .catch((error)=>{
        if(!errorArray.includes(error)){
            errorArray.push(error);
        }
        return new Set(errorArray);
    })
}

/**
 * @description: recoge los datos de una API dada una url inválida
 * @param {String} url 
 * @returns {Array<Object>}
 */
export const fetchPostWithErrorAsync = async (url) =>{
    const errorArray = new Array();
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Error en la respuesta");
        }
        return response.json();
    } catch (error) {
        if(!errorArray.includes(error)){
            errorArray.push(error);
        }
        return new Set(errorArray);
    }
}
