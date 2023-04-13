import obtenerLimites from "./ControladorMatriz";

class Auto
{
    constructor()
    {
        this.posicionInicialX = 0;
        this.posicionInicialY = 0;
        this.orientacionInicial = "N";
        this.orientacionActual = this.orientacionInicial;
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
        if(cadenaComando.includes("/"))
        {  
            let limiteParametroPosicionInicial=cadenaComando.indexOf("/");
            let cadenaPosiciones=cadenaComando.substring(0,limiteParametroPosicionInicial); //"5,5N"

            datosIniciales = cadenaPosiciones.split(","); //[5,5N]

            let posicionYyOrientacion = datosIniciales[datosIniciales.length - 1]; //5N

            let orientacionInicial = posicionYyOrientacion[posicionYyOrientacion.length -1]; //N
            let posicionYInicial = posicionYyOrientacion.slice(0, posicionYyOrientacion.length - 1); //5

            datosIniciales.pop();
            datosIniciales.push(posicionYInicial);
            datosIniciales.push(orientacionInicial);
        }
        else
        {
            datosIniciales = [0,0,"N"];
        }
        return datosIniciales;
    }

    establecerPosicionesIniciales(datosIniciales)
    {
        this.posicionActualX = datosIniciales[0];
        this.posicionActualY = datosIniciales[1];
        this.orientacionActual = datosIniciales[2];
    }
    

    ejecutar(cadenaComando)
    {
        let limites = obtenerLimites(cadenaComando);
        this.establecerLimites(limites);
        cadenaComando = this.eliminarParametrosDe(cadenaComando);

        let datosIniciales = this.obtenerPosicionInicial(cadenaComando);
        this.establecerPosicionesIniciales(datosIniciales);
        cadenaComando = this.eliminarParametrosDe(cadenaComando);

        this.moverAuto(cadenaComando);
        return this.posicionActualX+","+this.posicionActualY+this.orientacionActual;
    }

    moverAuto(cadenaComando){
        for(let comando=0;comando<cadenaComando.length;comando++){
            if(cadenaComando[comando]=="D") this.rotarDerecha();
            else if(cadenaComando[comando]=="I") this.rotarIzquierda();
            else if(cadenaComando[comando]=="A") this.avanzar();
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