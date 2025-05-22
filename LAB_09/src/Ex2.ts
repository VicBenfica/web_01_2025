class Exercicio3{
    static formatar(a:any):string{
        if (typeof a === 'number') {
            return a.toFixed(2);//converte p string com duas casas decimais 
            }
        else if(typeof a === 'boolean'){
            if(a=== true){
                return "Sim";
            }else{
                return "Não";
            }
        }else if(a instanceof Date){//verifica se é tipo date
            const dia = String(a.getDate()).padStart(2,'0');
            const mes = String(a.getMonth()+1).padStart(2,'0');
            const ano = a.getFullYear();
            return `${dia}/${mes}/${ano}`;
        }else{
            return "Tipo não suportado";
        }
            
    }
}


// Testes
console.log(Exercicio3.formatar(123.4567)); // "123.46"
console.log(Exercicio3.formatar(new Date(2023, 9, 5))); // "05/10/2023"
console.log(Exercicio3.formatar(true)); // "Sim"
console.log(Exercicio3.formatar(false)); // "Não"