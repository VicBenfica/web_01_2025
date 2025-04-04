// Inicializa o array
let Produtos = ["Arroz", "Feijão", "Leite", "Pão", "Açúcar", "Café", "Óleo"];

// Substituir "Leite" por "Queijo"
for (let i = 0; i < produtos.length; i++) {
    if (produtos[i] === "Leite") {
        produtos[i] = "Queijo";
        break;
    }
}

// Remover o primeiro item
let novaLista = new Array(produtos.length - 1);
for (let i = 1; i < produtos.length; i++) {
    novaLista[i - 1] = produtos[i];
}
produtos = novaLista;

// Adicionar "Farinha" no final
let novaLista2 = new Array(produtos.length + 1);
for (let i = 0; i < produtos.length; i++) {
    novaLista2[i] = produtos[i];
}
novaLista2[produtos.length] = "Farinha";
produtos = novaLista2;

// Inverter a ordem dos itens
let invertido = new Array(produtos.length);
for (let i = 0; i < produtos.length; i++) {
    invertido[i] = produtos[produtos.length - 1 - i];
}
produtos = invertido;

// Imprimir os resultados
console.log("Lista final de produtos:", produtos);
console.log("Número total de itens:", produtos.length);
