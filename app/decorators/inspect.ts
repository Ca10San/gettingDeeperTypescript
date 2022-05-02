export function inspect() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: Array<any>) {
            const result = originalMethod.apply(this, args);
            
            console.log(`--- Method ${propertyKey}`);
            console.log(`------ params: ${JSON.stringify(args)}`);            
            console.log(`------ retorno: ${JSON.stringify(result)}`);
            return result;
        }
        return descriptor;
    }
}