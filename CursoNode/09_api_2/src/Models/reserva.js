//crear reserva
//getAllReservas
//getReservaById
//updateReserva
//deleteReserva

import db from "./database.js";

export const createReserva = (idclient,fini,ffin)=>{
    //inserción en la DB de un cliente
    const sql = `INSERT INTO reserva (idClient, fini, ffin) VALUES (?,?,?)`;
    const params = [idclient, fini, ffin];
    db.run(sql, params,function(err){ //Cuando queres crear/actualizar utilizar RUN
        callback(err,{id:this.lastID});
    });
}

export const getAllReservas = (callback) =>{
    const sql = `SELECT * FROM reserva`;
    db.all(sql,[],function(err,rows){ //Cuando quieres afectar a muchas filas ALL
        callback(err,rows);
    })
}

export const getReservaById = (id, callback) =>{
    const sql = `SELECT * FROM reserva WHERE id=?`;
    db.get(sql, [id], (err,rows)=>{ //Para hacer un GET de uno
        callback(err,rows);
    })
}

export const deleteReservaById = (id, callback) =>{
    const sql = `DELETE FROM reserva WHERE id=?`;
    db.get(sql, id, (err,rows)=>{ //Para hacer un GET de uno
        callback(err,{changes:this.changes});
    })
}

export const updateReserva = (id,idClient, fini,ffin) =>{
    const sql = `UPDATE reserva SET idClient=?,fini=?,ffin=? WHERE id=?`;
    const params = [idClient, fini, ffin, id];
    db.run(sql,params, function(err){
        callback(err,{changes:this.changes})
    })
}