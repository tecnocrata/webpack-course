import Template from "./templates/Template.js";
import db from "../public/db.json";

console.log("hola", db);

(async function App() {
  const main = null || document.getElementById("main");
  main.innerHTML = await Template();
})();
