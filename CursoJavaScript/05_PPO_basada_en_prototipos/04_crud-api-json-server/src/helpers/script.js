/**
 * @description: CREATE
 */
export const createData = async (dataUrl, newData) =>{
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


/**
 * 
 * @description: READ
 */
export const readData = async (dataUrl) => {
    try {
        const response = await fetch(dataUrl)
        if(!response.ok){
            throw new Error("Error al obtener la respuesta")
        }
        const data = await response.json();
        console.log("Leídos los datos:", data);
        // return data;
    }catch (error) {
        console.log("Error al obtener los datos ", error)
    }
}

/**
 * @description: UPDATE
 */
export const updateData = async (dataUrl, id, updData) => {
    try {
        const response = await fetch(`${dataUrl}/${id}`, {
            method: 'PUT', //EXISTE EL PATH PARA EDITAR VALORES CONCRETOS
            headers: {
                'Content-Type' : 'aplication/JSON'
            },
            body: JSON.stringify(updData)
        })
        if(!response.ok){
            throw new Error("Error al obtener la respuesta")
        }
        const data = await response.json();
        console.log("Entrada modificada:", data);
        // return data;
    }catch (error) {
        console.log("Error al obtener los datos ", error)
    }
}

/**
 * @description: DELETE
 */
export const deleteData = async (dataUrl, id) => {
    try {
        const response = await fetch(`${dataUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'aplication/JSON'
            },
        })
        if(!response.ok){
            throw new Error("Error al obtener la respuesta")
        }
        const data = await response.json();


        console.log("Producto borrado correctamente ", data);
        // return data;
    }catch (error) {
        console.log("Error al obtener los datos ", error)
    }
}
