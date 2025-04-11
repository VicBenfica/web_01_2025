type Tarefaa = {
    descricao: string;
    prioridade: number;
    concluida: boolean;
  };
  
  function executarTarefass(
    tarefas: Tarefaa[],
    callback: (descricao: string, indice: number, total: number) => void,
    tempo: number = 1000
  ): void {
    //tarefas: a lista de coisas que precisam ser feitas
    //callback: uma função que vai ser chamada depois de cada tarefa
    //tempo: intervalo de espera entre uma tarefa e outra (em milissegundos, opcional)
    // Ordena por prioridade (1 = maior prioridade)
    tarefas.sort((a, b) => a.prioridade - b.prioridade);
  
    let indice = 0;
    const totalTarefas = tarefas.length;
    //indice: qual tarefa estamos executando agora
    //totalTarefas: quantas tarefas no total  
    const intervalo = setInterval(() => {
      const tarefaAtual = tarefas[indice];//indice = 0
  
      if (!tarefaAtual) {
        clearInterval(intervalo);
        return;
      }
  
      if (tarefaAtual.descricao === "Cancelar") {
        console.log("Execução cancelada!");
        clearInterval(intervalo);
        return;
      }
      //Se uma tarefa tiver o texto "Cancelar", a função para imediatamente e não chama nem o callback.
      //Marca a tarefa como feita
      tarefaAtual.concluida = true;

      //Atualiza o callback, caderno de atualizaçoees que a tarefa foi feita, qual posição estamos e quantas tarefas existem
      callback(tarefaAtual.descricao, indice, totalTarefas);
      //Aumenta o indice e vai para a outra tarefa
      indice++;
      //se o indice for maior ou igual ao total de tarefas, dá o intervalo
      if (indice >= totalTarefas) {
        clearInterval(intervalo);
      }
    }, tempo);//vai repetir no tempo- tempo, determinado
  }

  function imprimirTarefa(descricao: string, indice: number, total: number): void {
    console.log(`Tarefa concluída: ${descricao}`);
    console.log(`Progresso: ${indice + 1}/${total}`);
  }
  
  // Teste:
  const tarefas: Tarefaa[] = [
    { descricao: "Fazer relatório", prioridade: 2, concluida: false },
    { descricao: "Enviar e-mail", prioridade: 3, concluida: false },
    { descricao: "Reunião com equipe", prioridade: 1, concluida: false }
  ];
  
  executarTarefass(tarefas, imprimirTarefa, 1500);
  