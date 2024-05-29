import app from "../app.js";
import message from "./message.js";
import { config } from "dotenv";
config();

const caseEntorno = () => {
    switch (process.env.NODE_ENV) {
        case "production":
            message(`api lista en el puerto ${app.get("PORT")}`, "danger");
            break;

        case "develop":
            message(`api lista en el puerto ${app.get("PORT")}`, "success");
            break;

         case "qa":
                message(`api lista en el puerto ${app.get("PORT")}`, "warning");
                break;
    
        default:
        message(`api lista en el puerto ${app.get("PORT")}`, "success");
        break; 

    }

};

export default caseEntorno;