import db from "./database.js";

//ESTO ES SQLITE

export const createClient = (nombre,email,callback)=>{
    //inserción en la DB de un cliente
    const sql = `INSERT INTO cliente (nombre, email) VALUES (?,?)`;
    const params = [nombre, email];
    db.run(sql, params,function(err){ //Cuando queres crear/actualizar utilizar RUN
        callback(err,{id:this.lastID});
    });
}

export const getAllClient = (callback) =>{
    const sql = `SELECT * FROM cliente`;
    db.all(sql,[],function(err,rows){ //Cuando quieres afectar a muchas filas ALL
        callback(err,rows);
    })
}

export const getClientById = (id, callback) =>{
    const sql = `SELECT * FROM cliente WHERE id=?`;
    db.get(sql, id, function(err,row){ //Para hacer un GET de uno
        callback(err,row);
    })
}

export const deleteClientById = (id, callback) =>{
    const sql = `DELETE FROM cliente WHERE id=?`;
    db.run(sql, id, function(err){ //Para hacer un GET de uno
        callback(err,{changes:this.changes});
    })
}

export const updateClient = (id,nombre, email,callback) =>{
    const sql = `UPDATE cliente SET nombre=?,email=? WHERE id=?`;
    const params = [nombre, email, id];
    db.run(sql,params, function(err){
        callback(err,{changes: this.changes})
    })
}