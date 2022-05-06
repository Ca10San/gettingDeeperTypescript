import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');

if(form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error("Form não encontrado! Não foi possível inicializar a aplicação.")
}

const botaoImport = document.querySelector('#botao-importar');

if(botaoImport) {
    botaoImport.addEventListener('click', () => {
        controller.importaDados();
    })
} else {
    throw Error("Botao de importar não encontrado!")
}