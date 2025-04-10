type Evento = {
    nome: string;
    mes: string;
    };
    const eventos: Evento[] = [
    { nome: "Workshop TypeScript", mes: "Janeiro" },
    { nome: "Hackathon", mes: "Março" },
    { nome: "Conferência de IA", mes: "Janeiro" }
    ];
    const mesDesejado: string = "Janeiro";
    // Implementar uma função que retorna apenas os eventos no mês desejado

    let eventoJaneiro = eventos.filter(evento => evento.mes == mesDesejado);

    console.log(eventoJaneiro);