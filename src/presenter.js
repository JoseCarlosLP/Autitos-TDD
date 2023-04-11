
import { mostrarPosiciones } from "./MostrarPosiciones";

const comandos = document.getElementById("comandos");
const form = document.querySelector("#form_ejecutar");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  mostrarPosiciones(comandos.value)
});
