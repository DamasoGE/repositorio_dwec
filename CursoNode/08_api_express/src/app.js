import express from 'express';
import productsRoutes from './routes/products.js'



// Creamos la instancia de express
const app = express();

//expresamos el middleware para que nuestro servidor pueda entender json.
app.use(express.json());
//rutas que podemos usar
app.use('/api/products',productsRoutes);
//puerto en el que se va a correr el srevidor
const PORT=3000;

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})
