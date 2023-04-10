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
            else
                this.posicionActualY++;
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
    }
}

export default Auto;