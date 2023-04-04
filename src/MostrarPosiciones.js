import { ejecutar } from "./ControladorAuto";

export function mostrarPosiciones(cadenaComando)
{
    let div = document.querySelector("#posiciones");
    div.innerHTML="Posicion Inicial = "+ ejecutar("") + "<br> " + 
    "Comandos: "+cadenaComando + "<br> " + 
    "Posicion Final : "+ejecutar(cadenaComando);
}