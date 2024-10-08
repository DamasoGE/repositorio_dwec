//-----------FORMA ANTIGUA
const miCalculadora = require('./helpers/scripts')
console.log(miCalculadora)
console.log(miCalculadora.sumar(2,3))

//--------------FORMA MODERNA
//Haciendo un destructuring del objeto. IMPORTANTE espacio delante y otro detras de las llaves
// Esto evita la necesidad de miCalculadora.sumar() -> sumar()
const { sumar, restar, multiplicar, dividir, modulo } = require("./helpers/scripts")
console.log(sumar(1,2))