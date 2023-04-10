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

    avanzar()
    {
        if(this.orientacionActual=="N")
        {
            if(this.posicionActualY<9)
                this.posicionActualY++;
        }
        else if(this.orientacionActual=="E")
        {
            this.posicionActualX++;
        }
        else if(this.orientacionActual=="S")
        {
            if(this.posicionActualY!=0)
                this.posicionActualY--;
        }
        else if(this.orientacionActual=="O")
        {
            if(this.posicionActualX!=0)
                this.posicionActualX--;
        }
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