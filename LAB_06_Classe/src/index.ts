import { Aluno } from "./Aluno"
 const aluno1 = new Aluno("Carlos", 23, "ADS", "BTV1111")
 aluno1.imprimir()


 import { Livro } from "./Livro"
 const livro1 = new Livro("A menina que roubava livros","Markus Zusak" , 2014, "Intriseca")
 livro1.exibirDados()

 
 const livro2 = new Livro("TED Talks","Chris Anderson" , 2016, "Intriseca")
 livro2.exibirDados()

 import { Usuario } from "./Usuario"

 const UsuarioVic = new Usuario("Victoria Benfica", " victoria.benfica113@hotmail.com")
 console.log(UsuarioVic.boasVindas())

import { Carro } from "./Carro"
 const Celta = new Carro("Chevrolet", "Celta", 2022)
 console.log(Celta.mostrarCarro())
 Celta.ano = 2015;
 console.log(Celta.mostrarCarro())


import { Produto } from "./Produto"
  const prod = new Produto("Notebook", 3500)
  console.log(prod.mostrarInformacoes())

