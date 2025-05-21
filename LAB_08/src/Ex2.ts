interface Produto {
    id: number;
    nome: string;
    preco: number;
    }


    
    // CLASSE - Ex3
export class Produto1{
    public id: number;
    public nome: string;
    public preco: number;
  
  
    constructor(id: number, nome: string, preco: number) {
    this.id = id;
    this.nome= nome;
    this.preco=preco;
    }

    exibirDados():void{
        console.log(
        `Dados do Produto:\nId: ${this.id}\nNome: ${this.nome}\nPreco: ${this.preco}`)
        }
    }