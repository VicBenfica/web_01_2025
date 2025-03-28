let Nomes : string[]=["Carlos", "Ana", "Pedro", "Mariana"];
let posPedro: number = nomes.indexOf("Pedro")//pegar o indice do elemento, no caso 1
console.log(posPedro)
nomes.splice(posPedro,1);//corta o elemento entre dos dois elementos
fruits.push("João"); // Adiciona no final
fruits.unshift("Beatriz"); // Adiciona no início
let total: number =Nomes.indexOf("João")+1;
console.log(`A lista final é ${Nomes} e o numero é ${total}`);

