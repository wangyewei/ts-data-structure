'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class Stack {
    stack;
    constructor(...args) {
        this.stack = [...args];
    }
    push(...item) {
        this.stack.push(...item);
    }
    pop() {
        this.stack.pop();
    }
    peek() {
        return this.isEmpty() ? undefined : this.stack[this.size() - 1];
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        return this.stack.length;
    }
}

exports.Stack = Stack;
