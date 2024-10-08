//----IMPORTACIONES---//
const { ejercicio1, ejercicio2, ejercicio3, ejercicio4, ejercicio5, ejercicio6, ejercicio7 } = require("./helpers/scripts") ;
const { usuarios } = require("./data/usuarios");

//---VARIABLES---//

//---FUNCIONES--//

//---INICIO DEL PROGRAMA---//

//---BORRAR LA PANTALLA---//
console.clear();

//ejercicio1("Lorem impum dolor sit amte, consectetur adipiscing elit");

//ejercicio2('datos1.txt');

//ejercicio3('datos1.txt','datos2.txt');

//ejercicio4('datos2.txt');

//ejercicio6(usuarios)

ejercicio7(usuarios,7)
/*
//--------------FORMA MODERNA
//Haciendo un destructuring del objeto. IMPORTANTE espacio delante y otro detras de las llaves
// Esto evita la necesidad de miCalculadora.sumar() -> sumar()
const { sumar, restar, multiplicar, dividir, modulo } = require("./helpers/scripts")
console.log(sumar(1,2))

*/