const posicionInicialX=0;
const posicionInicialY=0;

export function ejecutar(cadenaComando){
    let posicionActualX=posicionInicialX;
    let posicionActualY=posicionInicialY;
    posicionActualY=moverAuto(cadenaComando,posicionActualY);
    return posicionActualX+","+posicionActualY+"N";
}

function moverAuto(cadenaComando,posicionActualY){
    for(let comando=0;comando<cadenaComando.length;comando++){
        posicionActualY++;
    }
    return posicionActualY;
}   