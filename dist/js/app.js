import { NegociacaoControler } from "./controllers/negociacao-controller.js"; //lembre-se sempre de colocar o .js no final para a IDE saber que é um módulo de um arquivo JavaScript.
const controller = new NegociacaoControler();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
