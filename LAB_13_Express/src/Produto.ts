import { Fabricante } from "./Fabricante"

 export class Produto {
    id:number
    fabricante: Fabricante
    nome: string
    preco: number

    constructor(nome:string, preco:number, id: number, fabricante:Fabricante){
    this.nome = nome
    this.preco = preco
    this.id = id
    this.fabricante = fabricante
    }

    mostrarInformacoes(): void {
    console.log(`\nDados do produto:\nNome: ${this.nome},Preço:${this.preco}`)
    }
    }
   