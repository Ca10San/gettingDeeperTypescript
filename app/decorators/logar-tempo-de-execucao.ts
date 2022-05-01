export function logarTempoDeExecucao() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;
        descriptor.value = function(...args: Array<any>) {
            const t1 = performance.now();
            const result = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t1-t2)/1000} segundos`);
            return result;
        }
        return descriptor;
    }
}