function obtenerLimites(cadenaComando){
    let limites = []; 
    let posicionFinDeLimites=cadenaComando.indexOf("/");
    let cadenaLimites=cadenaComando.substring(0,posicionFinDeLimites);
    limites = cadenaLimites.split(",");
    return limites;
}
export default obtenerLimites;