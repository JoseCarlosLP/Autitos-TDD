import identificadorDeLimites from "./ControladorMatriz";

class Auto
{
    constructor()
    {
        this.posicionInicialX = 0;
        this.posicionInicialY = 0;
        this.posicionActualX = this.posicionInicialX;
        this.posicionActualY = this.posicionInicialY;
        this.orientacionInicial = "N";
        this.orientacionActual = this.orientacionInicial;
    }

    establecerLimites(limites,cadenaComando)
    {
        this.limiteX = limites[0];
        this.limiteY = limites[1];
        let comandos = cadenaComando.split("/");
        return comandos[comandos.length-1];
    }

    ejecutar(cadenaComando){

        let limites = identificadorDeLimites(cadenaComando);
        cadenaComando = this.establecerLimites(limites,cadenaComando);

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
        if(this.posicionActualX==this.limiteX) this.posicionActualX--;
        if(this.posicionActualX==-1) this.posicionActualX++;        
        if(this.posicionActualY==this.limiteY) this.posicionActualY--;
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