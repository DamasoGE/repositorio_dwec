
 /* Dada la escructura de usuarios de json placeholder
 1. Crear una función que me genere un resumen, mostrandome el nombre de usuario, 
 el email, la ciudad y la website de todos los usuarios que le pasemos en un array. 
 Obligatorio usar destructuración de objetos para l realización del ejercicio.
 2. Crear una función llamada buscar por ciudad, que le pasemos el array de 
 usuarios, el nombre de una ciudad y que me devuelva el nombre del usuario y el 
 email y la geolocalización.*/

export const dec1 = (arrayObj) =>{
    arrayObj.forEach((elem)=> {
        const { name, email, address: {city}, website  } = elem
        console.log(
            `nombre: ${name}
            ciudad: ${city}
            email: ${email}
            website: ${website}
            `
        )
    })
 }

 export const buscarPorCiudad = (arrayObj,ciudad) => {
    console.log("En la ciudad "+ ciudad + "están: ")
    arrayObj.filter((elem)=> elem.address.city==ciudad).forEach((elem)=> {
            const { name, email, address: {geo: {lat}}, address: {geo: {lng}}  } = elem
            console.log(
                `nombre: ${name}
                email: ${email}
                geo_lat: ${lat}
                geo_lng: ${lng}
                `
            )
    }

    )
 }