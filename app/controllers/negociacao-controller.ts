import { domInjector } from '../decorators/dom-injector.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { MensagemView } from '../views/mensagem-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';

export class NegociacaoController {
    @domInjector('#data')
    private inputData: HTMLInputElement;

    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;

    @domInjector('#valor')
    private inputValor: HTMLInputElement;
    
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView");
    private mensagemView = new MensagemView("#mensagemView");

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }
    
    @logarTempoDeExecucao(true)
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputData.value,
            this.inputQuantidade.value
        );
        if(!this.verificaDiaUtil(negociacao.data)) {
            this.mensagemView.update("Apenas negociações em dias úteis podem ser adicionadas");
            return ;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
    
    public atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso!");
    }

    private verificaDiaUtil(date: Date): boolean {
        return date.getDay() > DiasDaSemana.DOMINGO 
            && date.getDay() < DiasDaSemana.SABADO;
    }
    
    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
