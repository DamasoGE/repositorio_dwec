# Manual de Promesas en JavaScript

### Estados de las promesas

> - Pendiente **(Pending)**: Es el estado inicial de una promesa que está en progreso.
> - Cumplida **(Fullfilled)**: La promesa se resuelve favorablemente y me devuelve un valor.
> - Rechazada **(Rejected)**: La promesa no se resuelve y se devuelve un error.

### Creacion de promesas

```javascript
    const mipromesa= new Promise((resolve,reject) =>{
        //Codigo que es asíncrono
        if(Condicion de ok){
            resolve(lo que quiero devolver)
        }else{
            reject(new Error("Error de acceso a la web"))
        }
    })
```

### Uso/Consumo de las Promesas

```javascript
    mipromesa
        .then((data) => {
            console.log("la promesa ha sido resuelta: ", data)
        })
        .catch(error => {
            console.log("la promesa ha sido rechazada: ", error)
        })
        .finally() //Da igual que sea resuelta o no resuelta, lo realiza.
```