import Auto from "./class-auto";

export function mostrarPosiciones(cadenaComando)
{
    const auto = new Auto();
    let div = document.querySelector("#posiciones");

    cadenaComandoSinLimites = auto.eliminarParametrosDe(cadenaComando);
    let datosIniciales = auto.obtenerPosicionInicial(cadenaComandoSinLimites);
    
    div.innerHTML="Posicion Inicial = "+ datosIniciales[0]+","+datosIniciales[1]+datosIniciales[2] + "<br> " + 
    "Comandos: "+ cadenaComando + "<br> " + 
    "Posicion Final = "+ auto.ejecutar(cadenaComando);
}