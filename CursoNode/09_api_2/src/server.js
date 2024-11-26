import express from 'express';
import clientesRoutes from './Routes/clientesRoutes.js';

import { PORT } from './Config/config.js'

//Creamos una aplicacion de tipo express
const app = express();
//Indico el tupo de datos que voy a recibir
app.use(express.json());
// Rutas
app.use("/api/clientes", clientesRoutes);
app.use("/api/reservas", reservasRoutes);
//Arrancar el servidor
app.listen(PORT , ()=>{
    console.log(`Servidor ejecutandose en url: http://localhost:${PORT}`);
})
