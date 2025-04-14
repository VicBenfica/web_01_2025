export class DateUtils{
    formato: string
    constructor(formato: string){
    
    this.formato = formato
    }

    static formatarData(data: Date, formato: string): string {
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
      
        if (formato === "dd/mm/yyyy") {
          return `${dia}/${mes}/${ano}`;
        } else if (formato === "yyyy-mm-dd") {
          return `${ano}-${mes}-${dia}`;
        } else {
          throw new Error("Formato não suportado.");
        }
      }
      
      static adicionarDias(data: Date, dias: number): Date {
        const novaData = new Date(data.getTime());
        novaData.setDate(novaData.getDate() + dias);
        return novaData;
      }
      

      static diferencaEmDias(data1: Date, data2: Date): number {
        const umDiaEmMs = 1000 * 60 * 60 * 24;
        const diferenca = Math.abs(data1.getTime() - data2.getTime());
        return Math.floor(diferenca / umDiaEmMs);
      }
      
    


    static ehFinalDeSemana(data: Date): boolean {
        const diaSemana = data.getDay(); // 0 = domingo, 6 = sábado
        return diaSemana === 0 || diaSemana === 6;
     }

     static converterParaISO(data: Date): string {
        return data.toISOString();
      }
      
    }