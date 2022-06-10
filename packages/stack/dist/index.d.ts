declare class Stack<T> {
    stack: T[];
    constructor(...args: T[]);
    push(...item: T[]): void;
    pop(): void;
    peek(): T;
    isEmpty(): boolean;
    size(): number;
}

export { Stack };
