import { Negociacao } from "../models/negociacao.js";
import { NegociacaoDoDia } from "../interfaces/negociacao-do-dia.js";

export class NegociacoesService {
    public obterNegociacoes(): Promise<Array<Negociacao>> {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados: Array<NegociacaoDoDia>) => {
                return dados.map(dado => {
                    return new Negociacao(
                        new Date(),
                        dado.vezes,
                        dado.montante
                    );
                })
            });
    }
}