let idades: number[] = [10, 15, 20, 8, 17, 25]; //O array só vai permitir numeros

    for(const num of idades){
    if(num<12){
        console.log(`A idade é ${num}, Criança`);
    }else if(12<=num && num<18){
        console.log(`A idade é ${num}, Adolescente`);
    }else{
        console.log(`A idade é ${num}, Adulto`);
    }
    }

