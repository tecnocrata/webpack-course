import Template from "./templates/Template.js";
import "../src/styles/main.css";
// import db from "../public/db.json";

console.log("hola level 1");

(async () => {
  const url_redirect = "./db.json";
  const db = await fetch(url_redirect);
  const content = db.status >= 200 && db.status < 300 ? await db.json() : "";
  console.log("hola level 2", content);
})();

(async function App() {
  const main = null || document.getElementById("main");
  main.innerHTML = await Template();
})();
