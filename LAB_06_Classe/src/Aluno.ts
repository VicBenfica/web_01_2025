export class Aluno{
    nome: string
    idade: number
    curso: string
    matricula: string

    constructor(nome: string, idade: number, curso: string, matricula: string){
    this.nome = nome
    this.idade = idade
    this.curso = curso
    this.matricula = matricula
    }

    imprimir(): void {
    console.log(
    `Dados do aluno:\nNome:${this.nome}\nIdade: ${this.idade}\nCurso: ${this.curso}\nMatrícula: ${this
    .matricula}`)
    }
    }