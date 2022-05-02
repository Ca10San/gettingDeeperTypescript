export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;
        descriptor.value = function(...args: Array<any>) {
            let divisor = 1;
            let unidade = 'milissegundos';
            if(emSegundos) {
                divisor = 1000;
                unidade = 'segundos'
            };

            const t1 = performance.now();
            const result = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t1-t2)/divisor} ${unidade}`);
            return result;
        }
        return descriptor;
    }
}