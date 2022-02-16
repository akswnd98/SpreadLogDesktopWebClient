export type ParameterizableNewable<C, P extends any[] = any[]> = new (...args: P) => C;
