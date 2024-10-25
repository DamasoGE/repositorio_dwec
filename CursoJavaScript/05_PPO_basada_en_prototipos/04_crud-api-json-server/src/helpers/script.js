
const dataUrl = "http://localhost:4000/historialPrecios"

/**
 * 
 */
export const insertData = async (newData) =>{
    try {
        const response = await fetch(dataUrl, {
            method: 'POST',
            headers: {
                'Content-Type' : 'aplication/JSON'
            },
            body: JSON.stringify(newData)
        })
        if(!response.ok){
            throw new Error("Error al obtener la respuesta")
        }
        const data = await response.json();
        console.log("Producto creado correctamente ", data);
        return data;
    } catch (error) {
        console.log("Error al obtener los datos ", error)
    }
}