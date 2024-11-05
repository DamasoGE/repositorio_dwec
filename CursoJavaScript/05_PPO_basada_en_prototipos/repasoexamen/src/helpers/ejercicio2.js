

export const modificarTallasYO = async (getProductFunction,url, talla, categoria) =>{
    try {
        const dataProducts = await getProductFunction(url);

        dataProducts.forEach((product)=>{
            const categorias = [];
            categorias.push();
            product.categoria.subcategorias.forEach((elem)=> elem.push);

            const promisesArray = [];


            if(categorias.includes(categoria)){
                promisesArray.push(fetch('http://localhost:3000/usuarios/1', {
                    method: 'PATCH',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({

                    })
                  })
                  .then(response => response.json())
                  .then(data => console.log("Elemento actualizado:", data))
                  .catch(error => console.error("Error:", error)));
            }



        })



    } catch (error) {
        console.log("Error in modificarTallas", error);
    }

}

export const modificarTallas = async (getProductsFunction, url) =>{
    try {
        const dataProducts = await getProductsFunction(url);
        //filtamos la dataProducts buscando categoría "ropa" y subcategoría "Deportiva"
        //---Creo un array para guardar sólo los nombres de los productos modificados
        const arrayNamesProductModified=[];
        const productosmodificados = dataProducts.map( async (producto)=>{
            const { id, categoria, detalles } = producto;
            //me pongo a filtrar
            if(categoria.nombre==="Ropa" && categoria.subcategorias?.includes("Deportiva") && !detalles["tallas disponibles"].includes("XS")){
                //Si la subcategoría es "Deportiva" modifico las tallas
                detalles["tallas disponibles"].unshift("XS");
                //OTRA FORMA ---> categoria.detalles["tallas disponibles"]=[...detalles["tallas disponibles"], "XS"]
                //Añado este producto modificado a mi array de productos modificados
                arrayNamesProductModified.push(categoria.nombre);
                //envio a la API el producto modificado
                // http://localhost:4000/productos/id
                const response= await fetch(`${url}/${id}`, {
                    method:"PUT",
                    headers:{
                        "Content-Type":"application:json"
                    },
                    body: JSON.stringify(producto)
                })

                if(!response.ok){
                    throw new Error("Error en la modificación de la talla");
                }
            }
            return producto;
        })

        console.log("arrayNamesProductModified-->", arrayNamesProductModified);

    } catch (error) {
        console.log("Error en modificarTallas", error);
    }
}