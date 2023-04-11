import Auto from "./class-auto";

export function mostrarPosiciones(cadenaComando)
{
    const auto = new Auto();
    let div = document.querySelector("#posiciones");
    div.innerHTML="Posicion Inicial = "+ auto.ejecutar("") + "<br> " + 
    "Comandos: "+ cadenaComando + "<br> " + 
    "Posicion Final = "+ auto.ejecutar(cadenaComando);
}