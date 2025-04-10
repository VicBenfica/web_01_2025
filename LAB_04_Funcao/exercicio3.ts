
function dobrarNumeross(A: Array<number>):Array<number>{
    let multiplicados:Array<number>=[];
    for(const num of A){
        multiplicados.push(num*2);
    }
    return multiplicados;
}


console.log(dobrarNumeross([2,4,8]));
//number[2,4,8] não existe. O correto seria passar um array diretamente: [2, 4, 8]
 