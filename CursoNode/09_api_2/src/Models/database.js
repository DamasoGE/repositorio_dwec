import sqlite3 from 'sqlite3';

import { DATABASE_PATH } from '../Config/config.js'

const db = new sqlite3.Database(DATABASE_PATH, (err)=>{
    if(err){
        console.error("Error al conectar con la base de datos", err.message)
    }else{
        console.log("Conexión exitosa a la base de datos");
    }
})

db.serialize(()=>{
    db.run(
        `CREATE TABLE IF NOT EXISTS cliente (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE
        )`
    ); // Comillas francesas por si queremos meter variables

    db.run(
        `CREATE TABLE IF NOT EXISTS reserva (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cliente_id INTEGER NOT NULL,
        fecha_entrada TEXT NOT NULL,
        fecha_salida TEXT NOT NULL,
        FOREIGN KEY (cliente_id) REFERENCES clientes(id)
        )`
    );
})

export default db;