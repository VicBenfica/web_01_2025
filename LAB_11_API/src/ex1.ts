 //Exemplo1 Estrutura Simples

export class Produto{
    id:number;
    nome: string;
    preco: number;


    constructor(id:number, nome: string, preco: number){
    this.id =id;
    this.nome = nome;
    this.preco = preco;
    }
}


export class Categoria{
    id:number;
    nome: string;
    preco:number;


    constructor(id:number, nome: string, preco:number){
    this.id =id;
    this.nome = nome;
    this.preco =preco;
    }
}

 
export class Fabricante{
    nome: string;
    

    constructor(nome: string){
    this.nome = nome;
    }
}

export class Endereco{
    cidade: string;
    pais: string;
    

    constructor(cidade: string, pais: string){
    this.cidade = cidade;
    this.pais = pais;
    }
}

export class Item{
    nome: string;
    quantidade: number;
    

    constructor(nome: string, quantidade: number){
    this.nome = nome;
    this.quantidade = quantidade;
    }
}
