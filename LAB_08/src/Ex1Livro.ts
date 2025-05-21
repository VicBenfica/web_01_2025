//INTERFACE
interface Funcionario{
    nome:string;
     idade:number;
     registro:number;
     salário: number;
     dataNascimento:Date;
     ativo:boolean;
    }
    
    const Joao: Funcionario ={
      nome:"João",
      idade:25,
      registro:20292929,
      salário:1000,
      dataNascimento: new Date("2025-04-01"),
      ativo: true
    
    } 
    

// CLASSE
export class Livro{
    public titulo: string;
    public autor: string;
    public ano: number;
  
  
    constructor(titulo: string, autor: string, ano: number) {
    this.titulo = titulo;
    this.autor= autor;
    this.ano=ano;
    }

    exibirDados():void{
        console.log(
        `Dados do Livro:\nTitulo: ${this.titulo}\nautor: ${this.autor}\nano: ${this.ano}`)
        }
    }

