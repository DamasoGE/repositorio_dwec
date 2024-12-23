import express from 'express';
import { deleteClientHandler, getAllClientHandler, createClientHandler, postClientHandler, getClientByIdHandler } from '../Controller/clientController.js';

//Llego aquí con http://localhost:3000/api/clientes

//Tengo que crear un ENRUTADOR (Router de express)
const clientesRoutes =express.Router();

//Todas las operaciones y rutas disponibles para los clientes

//getbyid:
clientesRoutes.get("/:id", getClientByIdHandler);

//create:
clientesRoutes.post("/", createClientHandler);

//getall:
clientesRoutes.get("/",getAllClientHandler);

//delete:

clientesRoutes.delete("/:id",deleteClientHandler);

//path:


export default clientesRoutes;

