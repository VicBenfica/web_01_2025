//Exercício3 Corrija o código para que ele trate corretamente o erro lançado,utilizando unknown e vericação com instanceof:
 function executarOperacao() {
 try {
 throw "Erro genérico";
 } catch (erro: unknown) {
    if (erro instanceof Error) {
    console.log("Erro:", erro.message);
 }
 }
}
