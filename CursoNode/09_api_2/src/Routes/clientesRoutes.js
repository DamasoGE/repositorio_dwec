import express from 'express';
//Llego aquí con http://localhost:3000/api/clientes
//Tengo que crear un ENRUTADOR (Router de express)
const clientesRoutes =express.Router();

//Todas las operaciones y rutas disponibles para los clientes

clientesRoutes.get("/", getClientesHandler);
clientesRoutes.post("/", postClientesHandler);
clientesRoutes.delete("/:id", deleteClientesHandler);

export default clientesRoutes;

