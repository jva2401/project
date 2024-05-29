import app from "./app";
import caseEntorno from "./config/indexx.js";
import "./config/database/mongo.js"
// console.log(caseEntorno)
app.listen(app.get("PORT"), caseEntorno);

