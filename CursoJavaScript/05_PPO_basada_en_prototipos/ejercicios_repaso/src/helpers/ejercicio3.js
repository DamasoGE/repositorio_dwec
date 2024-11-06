export const fetchMultipleResourcesPromises = (url,res1,res2,res3) => {
    const resArray = [`${url}/${res1}`,`${url}/${res2}`,`${url}/${res3}`];
    const promisesArray = resArray.map(url=>fetch(url));
    
    return Promise.allSettled(promisesArray)
        .then((responses)=>{
            const results = responses.map((response)=>{
                if(response.status=="fulfilled"){
                    return response.value.json();
                }else{
                    return Promise.reject(new Error(response.reason));
                }
            })
            return Promise.all(results);
        })
        .then(data =>{
            const responseMap = new Map();
            data.forEach((elem,index)=> responseMap.set(resArray[index],elem));
            return responseMap;
        })
        .catch((error)=> console.log("Error:", error))
}