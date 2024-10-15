//Promesa de la obtención de los usuarios

export const obtenerUsuarios = (users) => { 
    return new Promise((resolve,reject) => {
        console.log("Cargando usuarios...")
        setTimeout(()=>{
            !Array.isArray(users) || users.length ==0 ?
            reject(new Error("No hay usuarios"))
            : resolve(users);
        },3000); //Simular el desfase
    });
}

//Crear una aplicacion que verifique el login y password de un usuario usando promesas.
//Si el login y el password es correcto, mensaje de bienvenida y añadirá al access día-mes-año-hora-minuto en el que ha accedido
//Si las credenciales no son correctas dar un error de acceso.

export const login= (datausers, name, pass) => {
    console.log("Validando...")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(datausers[name].password==pass){
                datausers[name].access.push(new date())
                resolve({ userdata: datausers[name], username: name});
            }else{
                reject(new Error("Invalid Login"));
            }

        },3000);
    });
}

