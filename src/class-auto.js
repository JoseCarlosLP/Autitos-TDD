import obtenerLimites from "./ControladorMatriz";

const limiteXDefecto=10;
const limiteYDefecto=10;

class Auto
{
    constructor()
    {
        this.posicionInicialX = 0;
        this.posicionInicialY = 0;
        this.orientacionInicial = "N";
        this.orientacionActual = this.orientacionInicial;

        this.posicionActualX =  this.posicionInicialX;
        this.posicionActualY =  this.posicionInicialY;

        this.limiteX = limiteXDefecto;
        this.limiteY = limiteYDefecto;
    }

    establecerLimites(limites)
    {
        this.limiteX = limites[0];
        this.limiteY = limites[1];
    }

    eliminarParametrosDe(cadenaComando)
    {
        let posicionFinDeLimites=cadenaComando.indexOf("/");
        cadenaComando=cadenaComando.substring(posicionFinDeLimites+1,cadenaComando.length);
        return cadenaComando;
    }

    obtenerPosicionInicial(cadenaComando)
    {
        let datosIniciales = [];
            let limiteParametroPosicionInicial=cadenaComando.indexOf("/");
            let cadenaPosiciones=cadenaComando.substring(0,limiteParametroPosicionInicial); //"5,5N"

            datosIniciales = cadenaPosiciones.split(","); //[5,5N]

            let posicionYyOrientacion = datosIniciales[datosIniciales.length - 1]; //5N

            let orientacionInicial = posicionYyOrientacion[posicionYyOrientacion.length -1]; //N
            let posicionYInicial = posicionYyOrientacion.slice(0, posicionYyOrientacion.length - 1); //5

            datosIniciales.pop();
            datosIniciales.push(posicionYInicial);
            datosIniciales.push(orientacionInicial);
        return datosIniciales;
    }

    establecerPosicionesIniciales(datosIniciales)
    {
        this.posicionActualX = datosIniciales[0];
        this.posicionActualY = datosIniciales[1];
        this.orientacionActual = datosIniciales[2];

        this.posicionInicialX = this.posicionActualX;
        this.posicionInicialY = this.posicionActualY;
    }
    
    verificarExistenciaDeCaracteres(cadenaParametros){
        return cadenaParametros.includes('N') || cadenaParametros.includes('S') || cadenaParametros.includes('E') || cadenaParametros.includes('O');
    }

    esPosicionInicial(cadenaComando){
        let esPosicionesIniciales;
        let posicionFinDeParametros=cadenaComando.indexOf("/");
        let cadenaParametros=cadenaComando.substring(0,posicionFinDeParametros);
        if(this.verificarExistenciaDeCaracteres(cadenaParametros))
            esPosicionesIniciales=true;
        else esPosicionesIniciales=false;
        return esPosicionesIniciales;
    }

    ejecutar(cadenaComando)
    {
        if(cadenaComando.indexOf("/")!=-1){
            if(!this.esPosicionInicial(cadenaComando)){
                let limites = obtenerLimites(cadenaComando);
                this.establecerLimites(limites);
                cadenaComando = this.eliminarParametrosDe(cadenaComando);}
            if(this.esPosicionInicial(cadenaComando)){
                let datosIniciales = this.obtenerPosicionInicial(cadenaComando);
                this.establecerPosicionesIniciales(datosIniciales);
                cadenaComando = this.eliminarParametrosDe(cadenaComando);}
        }
        this.moverAuto(cadenaComando);
        return this.posicionActualX+","+this.posicionActualY+this.orientacionActual;
    }

    moverAuto(cadenaComando){
        for(let comando=0;comando<cadenaComando.length;comando++){
            if(cadenaComando[comando]=="D") this.rotarDerecha();
            else if(cadenaComando[comando]=="I") this.rotarIzquierda();
            else if(cadenaComando[comando]=="A") this.avanzar();
            else if(cadenaComando=="J") {this.avanzar(); this.avanzar();}
        }
    }

    controlarPosicionDentroDeLaMatriz()
    {
        
        if(this.posicionActualX>this.limiteX) this.posicionActualX--;
        if(this.posicionActualX==-1) this.posicionActualX++;        
        if(this.posicionActualY>this.limiteY) this.posicionActualY--;
        if(this.posicionActualY==-1) this.posicionActualY++;
    }

    avanzar()
    {
        if(this.orientacionActual=="N") this.posicionActualY++;
        else if(this.orientacionActual=="E") this.posicionActualX++;
        else if(this.orientacionActual=="S") this.posicionActualY--;
        else this.posicionActualX--;
        this.controlarPosicionDentroDeLaMatriz();
    }

    rotarDerecha()
    {
        if(this.orientacionActual=="N")  this.orientacionActual="E";
        else if(this.orientacionActual=="E") this.orientacionActual="S";
        else if(this.orientacionActual=="S") this.orientacionActual="O";
        else this.orientacionActual="N";
    }

    rotarIzquierda()
    {
        if(this.orientacionActual=="N")  this.orientacionActual="O";
        else if(this.orientacionActual=="O") this.orientacionActual="S";
        else if(this.orientacionActual=="S") this.orientacionActual="E";
        else this.orientacionActual="N";
    }
}
export default Auto;