function identificadorDeLimites(cadenaComando){
    let limites = [];
    if(cadenaComando.includes("/"))
    {  
        let posicionFinDeLimites=cadenaComando.indexOf("/");
        let cadenaLimites=cadenaComando.substring(0,posicionFinDeLimites);
        limites = cadenaLimites.split(",");
    }
    else
        limites = [10,10];

    return limites;
}
export default identificadorDeLimites;