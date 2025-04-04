let Misto :(number | string)[] = [10, "Azul", 25, "Vermelho", 30, "Verde"];
let valoresNumericos: Array<number> = [];
let valoresTextuais: Array<string>=[];

for(const Tipo of Misto){
    
    if(typeof(Tipo)=="number"){
        valoresNumericos.push(Tipo);
    }else{
        valoresTextuais.push(Tipo);
    }
}

console.log(`Os valores textuais são:${valoresTextuais}`);
console.log(`Os valores numericos são: ${valoresNumericos}`);