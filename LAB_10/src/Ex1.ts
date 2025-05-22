    function calcularMedia(notas: number[]): number {
        try{
            let soma = 0;
            for (let i = 0; i < notas.length; i++){
            soma += notas[i];
            }
            if (notas.length === 0) {
                throw new Error("O array de notas está vazio.");
            }
            return soma / notas.length;
        }catch (erro: unknown) {
            if (erro instanceof Error) {
            console.log("Erro:", erro.message);
            }
            return 0;
        }
    }