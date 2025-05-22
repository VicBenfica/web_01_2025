// Testes
class Exercicio{
    static contarOcorrencias(texto: string, termo: string): number {
        let contador = 0;
        let posicao = texto.indexOf(termo);
        
        while (posicao !== -1) {
            contador++;
            posicao = texto.indexOf(termo, posicao + 1); // continua buscando a partir da próxima posição
            //busca a próxima ocorrência, começando logo após a posição atual, para evitar contagem repetida do mesmo termo.
        }

        return contador;
    
    }
    static primeirasLetras(texto:string):string{
       return texto.split(" ").map(palavra=>palavra[0]).join(" ");
       //split:divide a frase em palavras
       //map pega a 1 letra de cada palavra
       //join junta as palavras dnv

    }

    static removerVogais(texto:string):string{
        return texto.replace(/[aeiouAEIOU]/g, '');
      //replace: substitui partes do texto
      //[]: letras que vão ser buscadas, /g: vai procurara por todo o texto
    }
}


console.log(Exercicio.contarOcorrencias("banana", "na")); // 2
console.log(Exercicio.primeirasLetras("JavaScript TypeScript")); // "J T"
console.log(Exercicio.removerVogais("Hello World")); // "Hll Wrld"