import { getAllClient, getClientById, deleteClientById, updateClient, createClient } from "../Models/cliente.js"

export const getClientHandler = (req,res) =>{

}

export const getAllClientHandler = (req,res) =>{
    //llamar a la función en SQLITE3 que se traiga todos los clientes
    getAllClient((err,rows)=>{
        if(err){
            res.status(500).json({error: err.message});
        }else{
            res.status(200).json(rows);
        }
    })
}

export const createClientHandler = (req,res)=>{
 const { nombre, email } = req.body;
 createClient(nombre, email, (err,result)=>{
    if(err){
        res.status(500).json({error: err.message});
    }else{
        res.status(201).json(result);
    }
 })
}

export const deleteClientHandler = (req,res)=>{

}

export const postClientHandler = (req,res)=>{

}