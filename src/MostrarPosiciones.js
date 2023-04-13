import Auto from "./class-auto";

export function mostrarPosiciones(cadenaComando)
{
    const posicionesIniciales = new Auto();
    let div = document.querySelector("#posiciones");
    posicionesIniciales.ejecutar(cadenaComando);
    const auto = new Auto();
    div.innerHTML="Posicion Inicial = "+ posicionesIniciales.posicionInicialX+","+
    posicionesIniciales.posicionInicialY+posicionesIniciales.orientacionInicial + "<br> " + 
    "Comandos: "+ cadenaComando + "<br> " + "Posicion Final = "+ auto.ejecutar(cadenaComando);
}