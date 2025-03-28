let listamista: (number | string)[] = [1, "Maçã", 2, "Banana", 3, "Laranja"];
let numeros :number[] = []; 
let frutas :string[] = [];

for(let item of listamista){
    if(typeof item == "string"){
        frutas.push(item);
    }else if (typeof item == "number"){
        numeros.push(item);
    }
}
console.log(`Os numeros sao: ${numeros}`);
console.log(`As frutas sao: ${frutas}`);
