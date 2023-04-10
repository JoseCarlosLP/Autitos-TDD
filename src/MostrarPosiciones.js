import { ejecutar } from "./class-auto";

export function mostrarPosiciones(cadenaComando)
{
    let div = document.querySelector("#posiciones");
    div.innerHTML="Posicion Inicial = "+ ejecutar("") + "<br> " + 
    "Comandos: "+cadenaComando + "<br> " + 
    "Posicion Final : "+ejecutar(cadenaComando);
}