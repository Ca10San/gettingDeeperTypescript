export function domInjector(seletor: string) {
    return function (target: any, propertyKey: string) {
        // criando um getter dinamico para retornar um elemento do DOM
        let element: HTMLElement;
        const getter = function() {
            if(!element) {
                element = document.querySelector(seletor) as HTMLElement;
            }
            return element;
        }

        //substituindo o metodo get do prototype da propriedade
        //pelo getter criado acima
        Object.defineProperty(
            target, 
            propertyKey, 
            { get: getter }
        );
    }

}