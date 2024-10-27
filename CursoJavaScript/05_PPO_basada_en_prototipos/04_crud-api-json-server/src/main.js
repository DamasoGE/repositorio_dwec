import { createData, readData, updateData, deleteData } from "./helpers/script";

//--------------------CREATE-----------------//
// const dataUrl = "http://localhost:4000/historialPrecios"
// const data = {
//     productoId: 2,
//     precios: [23,26,21.75,19.99]
// }
// createData(dataUrl, data)

//------------------READ---------------------//
// const dataUrl = "http://localhost:4000/historialPrecios"
// readData(dataUrl);

//------------------UPDATE------------------//
const dataUrl = "http://localhost:4000/historialPrecios"
const idData = "49a6";
const data = {
    productoId: 8,
    precios: [23,26,21.75,19.99]
}
updateData(dataUrl,"49a6",data)

//--------------------DELETE----------------//
// const dataUrl = "http://localhost:4000/historialPrecios"
// const idData = "c3bb";
// deleteData(dataUrl, idData);

