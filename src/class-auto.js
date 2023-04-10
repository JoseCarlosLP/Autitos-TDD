const limiteY = 10;
const limiteX = 10;

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

    ejecutar(cadenaComando){
        this.moverAuto(cadenaComando);
        return this.posicionActualX+","+this.posicionActualY+this.orientacionActual;
    }

    moverAuto(cadenaComando){
        for(let comando=0;comando<cadenaComando.length;comando++){
            if(cadenaComando[comando]=="D")
            {
                this.rotarDerecha();
            }
            else if(cadenaComando[comando]=="A")
            {
                this.avanzar();
            }
        }
    }

    verificarLimites()
    {
        if(this.posicionActualX==limiteX)
        {
            this.posicionActualX--;
        }
        if(this.posicionActualX==-1)
        {
            this.posicionActualX++;
        }
        if(this.posicionActualY==limiteY)
        {
            this.posicionActualY--;
        }
        if(this.posicionActualY==-1)
        {
            this.posicionActualY++;
        }
    }

    avanzar()
    {
        if(this.orientacionActual=="N")
        {
                this.posicionActualY++;
        }
        else if(this.orientacionActual=="E")
        {
                this.posicionActualX++;
        }
        else if(this.orientacionActual=="S")
        {
                this.posicionActualY--;
        }
        else if(this.orientacionActual=="O")
        {
                this.posicionActualX--;
        }
        this.verificarLimites();
    }

    rotarDerecha()
    {
        if(this.orientacionActual=="N")
        {
            this.orientacionActual="E";
        }
        else if(this.orientacionActual=="E")
        {
            this.orientacionActual="S";
        }
        else if(this.orientacionActual=="S")
        {
            this.orientacionActual="O";
        }
        else if(this.orientacionActual=="O")
        {
            this.orientacionActual="N";
        }
    }
}

export default Auto;