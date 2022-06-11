export class Stack<T> {

  stack: T[]

  constructor(...args: T[]) {
    this.stack = [...args]
  }

  push(...item: T[]): T[] {
    this.stack.push(...item)
    return this.stack
  }

  pop(): T[] {
    this.stack.pop()
    return this.stack
  }

  peek(): T {
    return this.isEmpty() ? undefined : this.stack[this.size() - 1]
  }

  isEmpty(): boolean {
    return this.size() === 0
  }

  size(): number {
    return this.stack.length
  }

}