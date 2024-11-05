/**
 * @description: recoge los datos de una API dada su url
 * @param {String} url 
 * @returns {Array<Object>}
 */
export const fetchUserDataPromise = (url) =>{
    return fetch(url)
    .then((response)=>{

        if(!response.ok){
            
            throw new Error("Error en respuesta")
        }
        return response.json()
    })
    .catch((error)=> console.log("Error en fetchUserData", error))
}

/**
 * @description: recoge los datos de una API dada su url
 * @param {String} url 
 * @returns {Array<Object>}
 */
export const fetchUserDataAsync = async (url) =>{
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Error en la respuesta");
        }
        return response.json();
    } catch (error) {
        console.log("Error:", error);
    }
}

/**
 * 
 * @param {String} key 
 * @param {Array<Object>} data 
 */
export const saveLocalStorage = (key,data) =>{
    if(!localStorage.hasOwnProperty(key)){
        localStorage.setItem(key,JSON.stringify(data));
    }
}