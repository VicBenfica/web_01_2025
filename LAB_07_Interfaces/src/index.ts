import { DateUtils } from "./DateUtils";
const hoje = new Date();

console.log(DateUtils.formatarData(hoje, "dd/mm/yyyy"));
console.log(DateUtils.diferencaEmDias(new Date("2025-04-01"), hoje));
console.log(DateUtils.adicionarDias(hoje, 10));
console.log(DateUtils.ehFinalDeSemana(hoje));
console.log(DateUtils.converterParaISO(hoje));
