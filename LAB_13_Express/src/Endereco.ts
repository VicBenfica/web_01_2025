export class Endereco{
    cidade: string
    pais: string

    constructor(cidade: string,  pais: string){
    this.cidade = cidade
    this.pais = pais
    }

    imprimir(): void {
    console.log(
    `Dados do aluno:\nNome:${this.nome}\nIdade: ${this.idade}\nCurso: ${this.curso}\nMatrícula: ${this
    .matricula}`)
    }
    }