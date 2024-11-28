import express from 'express';
import { deleteClientHandler, getAllClientHandler, createClientHandler, getClientHandler, postClientHandler } from '../Controller/clientController.js';

//Llego aquí con http://localhost:3000/api/clientes
//Tengo que crear un ENRUTADOR (Router de express)
const clientesRoutes =express.Router();

//Todas las operaciones y rutas disponibles para los clientes

//clientesRoutes.get("/:id", getClientHandler);
clientesRoutes.post("/", createClientHandler);
//clientesRoutes.delete("/:id", deleteClientHandler);

//getall:
clientesRoutes.get("/",getAllClientHandler);

//path:
export default clientesRoutes;

