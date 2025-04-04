
let Numeros: Array<number> = [12, 25, 37,  18,40,55, 62, 71, 84, 91];
let impar:Array<number>=[];
let par:Array<number>=[];
let maiorPar=0;
let maiorImpar = 0;
let MediaImpar =0;
let MediaPar=0;
let totalImpar = 0;
let totalPar = 0;


for(const num of Numeros){
    if(num%2==0){
        
        if(num>maiorPar){
            maiorPar=num;
        }
        par.push(maiorPar);
        totalPar=totalPar+num;
    }else{
        
        if(num>maiorImpar){
            maiorImpar=num;
        }
        impar.push(maiorImpar);
        totalImpar=totalImpar+num;
    }
}

    MediaImpar = totalImpar / impar.length
    MediaPar = totalPar / par.length;


    console.log(`Numeros pares: ${par}`);
    console.log(`O maior numero par é ${maiorPar}`);
    console.log(`A média dos numeros pares é ${MediaPar}`);
    console.log(`A Soma dos numeros pares é ${totalPar}`);

    console.log(`Numeros impares:${impar}`);
    console.log(`O maior numero impar é ${maiorImpar}`);
    console.log(`A média dos numeros impares é ${MediaImpar}`);
    console.log(`A Soma dos numeros impares é ${totalImpar}`);



