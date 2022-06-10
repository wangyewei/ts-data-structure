export class Stack<T> {

  stack: T[]

  constructor(...args: T[]) {
    this.stack = [...args]
  }

  push(...item: T[]): void {
    this.stack.push(...item)
  }

  pop(): void {
    this.stack.pop()
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