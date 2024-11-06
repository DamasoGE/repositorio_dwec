//---------------DECLARACION DE VARIABLES------//
const urldata = import.meta.env.VITE_URL_DATA;



export const getData = async(url,endpoint)=>{
    try {
        const response = await fetch(`${url}/${endpoint}`)

        if(!response.ok){
            throw new Error("Error en la respuesta");
        }

        const data = await response.json()
        return data;

    } catch (error) {
        console.log("Error: ", error);
    }
}

export const crearProducto = async (url,producto) => {

    //Añadimos el producto

    try {
        const response = await fetch(`${url}/productos`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/JSON'
            },
            body: JSON.stringify(producto)
        });

        if(!response.ok){
            throw new Error("No se ha recibido respuesta");
        }

        const data = await response.json();

    } catch (error) {
        console.log("Error", error)
    }

    addCategoriaIfNot(urldata, producto.categoriaId);

}

export const getProductos = async()=>{
    const productos = await getData(urldata,"productos");
    const categorias = await getData(urldata,"categorias");

    productos.forEach((producto)=>{
            categorias.forEach((categoria)=>{
                if(producto.categoriaId==categoria.id){
                    producto.categoriaId=categoria.categoria;
                }
            })
    })

    return productos;
}

export const modifyProductos = async(url, id, nombre, stock, precio, categoriaId)=>{
    try {
        const response = await fetch(`${url}/productos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                nombre,
                stock,
                precio,
                categoriaId
            })
        })
    
        if(!response.ok){
            throw new Error("No se ha recibido respuesta");
        }

    
    } catch (error) {
        console.log("Error", error)
    }

    addCategoriaIfNot(urldata, categoriaId);

}


export const eliminarProductos = (url,...id) =>{

    allId=[...id];

    const arrayPromesas = allId.map((id)=>{
        const response = fetch(`${url}/productos/${id}`,{
            method: 'DELETE'
        })
    })

    return Promise.allSettled(arrayPromesas)
        .then((responses)=>{
            const results = responses.map((response)=>{

            })
        })
        .catch((error)=>console.log("Error: ", error))


}


export const addCategoriaIfNot= async (url,categoria)=>{
    let isCategoria = false;
    const categorias = await getData(urldata, "categorias");

    categorias.forEach((obj)=>{
            if(obj.id==categoria){
                isCategoria = true;
            }
    })

    //Si no está la categoría la añadimos.

    if(!isCategoria){
        const addcategoria= { id: `${categoria}` }

        try {
            const response = await fetch(`${url}/categorias`,{
                method: 'POST',
                headers:{
                    'Content-Type':'application/JSON'
                },
                body: JSON.stringify(addcategoria)
            });

            if(!response.ok){
                throw new Error("No se ha recibido respuesta");
            }

        } catch (error) {
            console.log("Error", error)
        }
    }
}

