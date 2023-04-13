import Auto from "./class-auto";

export function mostrarPosiciones(cadenaComando)
{
    const auto = new Auto();
    let div = document.querySelector("#posiciones");
    auto.ejecutar(cadenaComando);

    div.innerHTML="Posicion Inicial = "+ auto.posicionInicialX+","+auto.posicionInicialY+auto.orientacionInicial + "<br> " + 
    "Comandos: "+ cadenaComando + "<br> " + 
    "Posicion Final = "+ auto.ejecutar(cadenaComando);
}