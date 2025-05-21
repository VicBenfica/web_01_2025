export class Numeros{
    valores: number[] = [];

      
    constructor(valores: number[] = []) {
    this.valores = valores;
    }



adicionar(valor: number):void{
    this.valores.push(valor);
}

removerUltimo(): void{
    this.valores.pop();
}

media(): number{
    if(this.valores.length === 0){
        return 0;
    }

    const soma = this.valores.reduce((total,num) => total + num,0);
    return soma/ this.valores.length;
}
}

const numeros = new Numeros([]);

numeros.adicionar(10);
numeros.adicionar(20);
numeros.adicionar(30);
numeros.removerUltimo();

console.log("Média dos valores:", numeros.media());


