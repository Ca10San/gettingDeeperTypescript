import { Negociacao } from './negociacao.js';
import { Imprimivel } from "../interfaces/imprimivel.js";

export class Negociacoes implements Imprimivel {
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(
            this.negociacoes.map(negociacao => negociacao.paraTexto())
        );
    }
}
