
function identificadorDeLimites(cadenaComando)
{
    let limites = [];
    if(cadenaComando.includes(","))
    {
        let separador = cadenaComando.split("/");
        limites = separador[0].split(",");
    }
    else
        limites = [10,10];
    return limites;
}
export default identificadorDeLimites;