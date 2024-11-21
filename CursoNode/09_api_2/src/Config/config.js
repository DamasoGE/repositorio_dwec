//Configuraciones necesarias del proyecto
import dotenv from 'dotenv';

dotenv.config(); //carga las variables de entorno del archivo .env en process.env

export const PORT = process.env.PORT || 3000; //Hemos puesto una medida de seguridad si no coge la variable de entorno.
export const DATABASE_PATH = process.env.DATABASE_PATH || "./database/hotel.sqlite";


