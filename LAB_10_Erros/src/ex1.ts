//Exercício1 Analise o código abaixo e identifique que o erro. Em seguida, reescreva-o como tratamento adequado.
function calcularMedia(notas: number[]): number {
try {
    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
    //Quando cmc com 0 é o sinal de menor <
    }
    if (notas.length === 0) {
        throw new Error("Não é possível dividir por zero.");
        }

    return soma / notas.length;  
    //colocar todo o cod dentro do try, o caso de erro é o ultimo, depois vem o return   
}catch(erro: unknown) {

    console.log("Erro encontrado", (erro as Error).message);
    return 0;
    //precisa retornar 0
    }
}


//Dica:OerropodelançarNaNsemaviso.Utilizetry/catcheajustealógicadoloop.
