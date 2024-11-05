/**
 * @description: devuelve un map con los productos
 * @param {Array<Object>} dataProducts 
 * @param {String} save 
 * @returns {Map<String,Object>} mapProducts || {String}
 */
export const generateMapProducts = async (dataProducts,save="noSave") => {
    const mapProducts = new Map();
    dataProducts.forEach(({ nombre, precio, stock, detalles}) => {
        const clave = nombre;
        const valor = {
            precio,
            cantidad: stock.cantidad,
            colores: detalles.colores,
            tallas: detalles["tallas disponibles"]
        };
        mapProducts.set(clave,valor);
    });

    if(save!=="save"){
        return mapProducts;
    }
    //Propaga la verdad para realizar la última ejecución
    !localStorage.hasOwnProperty("dataProductos") && 
        localStorage.setItem("dataProductos", JSON.stringify([...mapProducts]));
    return "Guardado en el local Storage o ya existe";
}

/**
 * 
 * @param {Function<url>} getProductsFunction
 * @param {String} save 
 * @param {String} url
 * @returns 
 */
export const generateMapProductsV2 = async (getProductsFunction, save="no Save", url) =>{
    try {
        const dataProducts = await getProductsFunction(url);

        const mapProducts = new Map();
        dataProducts.forEach(({ nombre, precio, stock, detalles}) => {
            const clave = nombre;
            const valor = {
                precio,
                cantidad: stock.cantidad,
                colores: detalles.colores,
                tallas: detalles["tallas disponibles"]
            };
            mapProducts.set(clave,valor);
        });
    
        if(save!=="save"){
            return mapProducts;
        }
        !localStorage.hasOwnProperty("dataProductos") && 
            localStorage.setItem("dataProductos", JSON.stringify([...mapProducts]));
        return "Guardado en el local Storage o ya existe";
    } catch (error) {
        console.log("Error in generatdMapProductV2", error);
    }
}

// getProduct(urlProducts)
//     .then(products => {
//         const mapProducts = new Map();
//         products.forEach(({ nombre, precio, stock, detalles })=>{
//             const clave = nombre;
//             const valor = {
//                 precio,
//                 cantidad: stock.cantidad,
//                 colores: detalles.colores,
//                 tallas: detalles["tallas disponibles"]
//             };
//             mapProducts.set(clave,valor);
//         })
//     })
//     .catch(error => console.log("Error en getProducts",error));