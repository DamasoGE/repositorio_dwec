// Realizar una descarga de la data de los users que está en mi Web y mostrarla en consola.
import { loginUsers, users } from "./src/data/data"
import { obtenerUsuarios, login } from "./src/helpers/script"

obtenerUsuarios(users)
  .then(users => {
    users.forEach(({ name, age }) => {
      console.log(`Nombre: ${name}, Edad: ${age}`)
    });
  })
  .catch(error =>{
    console.error(error)
  });

  login(loginUsers, "username1", 1234)
    .then(({ userdata, username }) =>{
      console.log(`Bienvenido ${username} -> password ${userdata.password}`)
    })
    .catch(error =>{
      console.error(error)
    });