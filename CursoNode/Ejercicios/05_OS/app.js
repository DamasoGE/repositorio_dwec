const os = require('os');
const { infoSO } = require('./src/helpers/script.js');

//Crear una funcion que me devuelva un array con la arquitectura y plataforma del sistema
console.log("Sin destructuring")
infoSO().forEach(elem => {
    if(elem.name=="CPUs"){
        console.log(`${elem.name}: ${elem.value[0].model}`);
    }else{
        console.log(`${elem.name}: ${elem.value}`);
    }

})
console.log("");
console.log("Con destructuring");

infoSO().forEach(({name, value}) => {
    if(name=="CPUs"){
        console.log(`${name}: ${value[0].model}`)
    }else{
        console.log(`${name}: ${value}`)
    }
})


