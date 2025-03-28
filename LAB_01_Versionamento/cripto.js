// Função para decodificar a string de acordo com as regras fornecidas
function decifrarMensagem(mensagem) {
    // Substituições de caracteres
    mensagem = mensagem.replace(/@/g, 'a')
                       .replace(/3/g, 'e')
                       .replace(/!/g, 'i')
                       .replace(/\*/g, 'o')
                       .replace(/%/g, 'u');

    // Função para verificar se o número é par
    function removerNumerosPares(mensagem) {
        return mensagem.replace(/\d/g, (match) => {
            return match % 2 === 0 ? '' : match;  // Remove números pares
        });
    }

    // Função para inverter palavras com um número ímpar de caracteres
    function inverterPalavras(mensagem) {
        return mensagem.split(' ').map(palavra => {
            return palavra.length % 2 === 1 ? palavra.split('').reverse().join('') : palavra;
        }).join(' ');
    }

    // Remover números pares
    mensagem = removerNumerosPares(mensagem);

    // Inverter palavras com número ímpar de caracteres
    mensagem = inverterPalavras(mensagem);

    return mensagem;
}

// Função principal que recebe entradas até encontrar "FIM"
function processarEntradas() {
    let mensagem;
    
    // Enquanto o usuário não digitar "FIM", continuamos pedindo entradas
    while (true) {
        // Pede uma entrada ao usuário
        mensagem = prompt("Por favor, insira uma palavra ou frase (ou 'FIM' para parar):");
        
        if (mensagem === "FIM") {
            break;  // Para o processo quando "FIM" for detectado
        }
        
        // Exibe a entrada original e a mensagem decodificada
        console.log(`Entrada: ${mensagem}`);
        console.log(`Decodificada: ${decifrarMensagem(mensagem)}`);
    }
}

// Chama a função para processar as entradas
processarEntradas();
