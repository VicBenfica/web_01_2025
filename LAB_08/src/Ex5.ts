interface Endereco {
rua: string;
numero: number;
cidade: string; // propriedade opcional
}

    // CLASSE - Ex3
    export class Cliente{
    nome: string;
    cpf : number;
    endereco: Endereco;
      
    constructor(nome: string, cpf: number, endereco: Endereco) {
    this.cpf = cpf;
    this.nome= nome;
    this.endereco=endereco;
    }
}

    const Maria = new Cliente (
        "Maria Eduarda", 222232,{
            rua:"Rua Sarapui",
            numero:213,
            cidade:"Boituva"
        }
    );
    console.log(Maria);
