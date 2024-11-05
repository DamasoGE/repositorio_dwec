import { getProducts } from "./helpers/getProduct";
import { generateMapProducts, generateMapProductsV2 } from "./helpers/ejercicio1";
import { modificarTallas } from "./helpers/ejercicio2";
const urlProducts = `${import.meta.env.VITE_URL_SERVER}/productos`

const init = async () =>{
    const dataProductos = await getProducts(urlProducts);
    const result = generateMapProducts(dataProductos,"save");
    console.log(result);
    const result2 = generateMapProducts(dataProductos);
    console.log(result2);

    const result3 = await generateMapProductsV2(getProducts,"save",urlProducts);
    console.log(result3);
    const result4 = await generateMapProductsV2(getProducts, "" ,urlProducts);
    console.log(result4);

    //-------------------MODIFICAR TALLAS-------------------//

    await modificarTallas(getProducts,urlProducts);
}

//-----------------INICIO DE LA APLICACION------------------//

init();