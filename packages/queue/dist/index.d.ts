declare class Queue<T> {
    queue: T[];
    constructor(...args: T[]);
    enqueue(...items: any[]): T[];
    dequeue(): T[];
    front(): T;
    back(): T;
    isEmpty(): boolean;
    size(): number;
}

export { Queue };
