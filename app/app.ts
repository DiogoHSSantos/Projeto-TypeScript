import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 100, 200);

console.log(negociacao.data);