import { inspect } from "../decorators/inspect.js";
import { escape } from "../decorators/escape.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
    protected element: HTMLElement;
    private escapar: boolean = false;

    constructor(seletor: string, escapar?: boolean) {
        const element = document.querySelector(seletor); 
        if(element) {            
            this.element = element as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`)
        }
    }

    protected abstract template(model: T): string;

    @inspect()    
    @logarTempoDeExecucao(true)    
    public update(model: T): void {
        let template = this.template(model);
        this.element.innerHTML = template;
    }
}