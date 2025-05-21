// Complete o código abaixo preenchendo os campos da interface e retornando um valor
    interface Animal {
        nome: string;
        tipo: string;
        
    }

    
    const cachorro: Animal = {
    nome: "Cachorro",
    tipo: "Mamifero"
    };

        

    function criarAnimal(a: Animal):void{
    // Retorne uma mensagem do tipo:
    console.log(
        `O ${a.nome} é do tipo ${a.tipo}`)
        }
    // "O animal cachorro é do tipo mamífero"
    

    console.log(criarAnimal(cachorro));
