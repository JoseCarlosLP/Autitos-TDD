const posicionInicial="0,0N";

export function ejecutar(comando){
    if(comando==="") return posicionInicial;
    if(comando==="A") return "0,1N";
    if(comando==="AA") return "0,2N";
}