//----IMPORTACIONES---//
const { ejercicio1, ejercicio2 } = require("./helpers/scripts") ;

//---VARIABLES---//

//---FUNCIONES--//

//---INICIO DEL PROGRAMA---//

//---BORRAR LA PANTALLA---//
console.clear();

ejercicio1("Lorem impum dolor sit amte, consectetur adipiscing elit");

ejercicio2('datos1.txt');

/*
//--------------FORMA MODERNA
//Haciendo un destructuring del objeto. IMPORTANTE espacio delante y otro detras de las llaves
// Esto evita la necesidad de miCalculadora.sumar() -> sumar()
const { sumar, restar, multiplicar, dividir, modulo } = require("./helpers/scripts")
console.log(sumar(1,2))

*/