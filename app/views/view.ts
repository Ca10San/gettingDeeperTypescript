export abstract class View<T> {
    protected element: HTMLElement;

    constructor(seletor: string) {
        this.element = document.querySelector(seletor);
    }

    abstract template(model: T): string;

    update(model: T): void {
        this.element.innerHTML = this.template(model);
    }
}