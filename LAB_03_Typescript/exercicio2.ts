let produtos: Array<string> = ["Arroz", "Feijão", "Leite", "Pão"];

//Como fazer a substituição direta
let indice = produtos.indexOf("Leite");//O indexOf encontra o numero do elemento leite

if(indice!=-1){
    //ou seja, se existir um elemento leite
    produtos[indice]="Queijo";
}

 // Remove o primeiro elemento da lista

 produtos.shift();

 //Adicionar elemento no final do array

 produtos.push("Café");

 //Contar o numero de itens
let Total = produtos.length;
 
console.log(`A lista final é: ${produtos}`);
console.log(`O total de itens é: ${Total}`);