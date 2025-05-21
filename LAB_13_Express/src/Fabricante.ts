export class Fabricante{
    nome: string
    endereco: string

    constructor(nome: string, endereco: string){
        this.nome = nome
        this.endereco = endereco
        }
        
        exibirDados(): void {
        console.log(
        `Dados do livro:\nTitulo: ${this.titulo} Autor: ${this.autor} Ano de Publicação: ${this.anoPublicacao} Editora: ${this
        .editora}`)
        }
        }