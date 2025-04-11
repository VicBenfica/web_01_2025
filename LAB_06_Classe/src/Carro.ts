export class Carro{
    marca: string
    modelo: string
    ano: number

    constructor(marca: string,modelo: string, ano: number){
    this.marca = marca
    this.ano = ano
    this.modelo = modelo
    }

    mostrarCarro(): void {
    console.log(
    `Dados do carro:\nMarca:${this.marca} Ano: ${this.ano} Modelo: ${this.modelo}`)
    }
    
    }