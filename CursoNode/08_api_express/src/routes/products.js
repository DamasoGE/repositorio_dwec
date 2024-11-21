import express from 'express';
import { productDB } from '../data/database.js';


// 1.-Creamos un router para manejar las rutas de los productos
const router = express.Router();

// 2.- Creamos la ruta GET para obtener todos los productos
router.get("/", (req,res)=>{
    //retorno todos los productos
    if(productDB.length===0){
        return res.status(404).json({error: "No hay productos cargados"});
    }
    res.json(productDB);
})

//3.-Creamos la ruta para obtener un producto concreto
router.get("/:id", (req,res)=>{

    const { id } = req.params

    if(isNaN(id)){
        return res.status(400).json({error: "Invalid product ID"})
    }

    const product = productDB.filter((product)=> product.id===parseInt(id))

    if(productId.length===0){
        return res.status(404).json({ error: "Product not Found"})
    }

    res.json();
})


//4.-Exportamos el router
export default router;