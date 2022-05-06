import { Comparavel } from "./comparavel";
import { Imprimivel } from "./imprimivel";

export interface Modelo<T> extends Imprimivel, Comparavel<T> {}