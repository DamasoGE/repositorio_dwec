import { getAllClient, getClientById, deleteClientById, updateClient, createClient } from "../Models/cliente.js"


//ESTO ES NODE

export const getClientByIdHandler = (req,res) =>{
    const { id } = req.params;

    getClientById(id,(err,row)=>{
        if(err){
            res.status(500).json({error: err.message});
        }else if(!row){
            res.status(404).json({error: "Cliente no encontrado"});
        }else{
            res.status(200).json(row);
        }
    })
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
    const { id } = req.params;
    
    deleteClientById(id, (err,result)=>{
        if(err){
            res.status(500).json({error: err.message});
        }else if(result.changes==0){
            res.status(404).json({error: "Cliente no encontrado"});
        }else{
            res.status(200).json(result);
        }
    });
}

export const postClientHandler = (req,res)=>{

}