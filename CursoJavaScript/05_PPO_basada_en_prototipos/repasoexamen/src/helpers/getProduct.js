/**
 * @description: Trae los productos de la API
 * @param {String} $urlProduct
 * @returns {Promise<Array>} DataProducts
 */
export const getProducts = async ($urlProduct) => {
    try {
        const response = await fetch($urlProduct);
        if(!response.ok){
            throw new Error("Error in getProducts");
        }
        return await response.json();
    } catch (error) {
        console.log("Error in getProducts", error);
    }
}