class Auto
{
    constructor()
    {
        this.posicionInicialX = 0;
        this.posicionInicialY = 0;
    }

    ejecutar(cadenaComando){
        let posicionActualX=this.posicionInicialX;
        let posicionActualY=this.posicionInicialY;
        posicionActualY=this.moverAuto(cadenaComando,posicionActualY);
        return posicionActualX+","+posicionActualY+"N";
    }

    moverAuto(cadenaComando,posicionActualY){
        for(let comando=0;comando<cadenaComando.length;comando++){
            posicionActualY++;
        }
        return posicionActualY;
    }   
}

export default Auto;