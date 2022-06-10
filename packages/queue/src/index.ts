export class Queue<T> {
  queue: T[]

  constructor(...args: T[]) {
    this.queue = [...args]
  }

  enqueue(...items): T[] {
    this.queue.push(...items)
    return this.queue
  }

  dequeue(): T[] {
    this.queue.shift()
    return this.queue
  }

  front(): T {
    return this.isEmpty() ? undefined : this.queue[0]
  }

  back(): T {
    return this.isEmpty() ? undefined : this.queue[this.size() - 1]
  }

  isEmpty(): boolean {
    return this.size() === 0
  }

  size(): number {
    return this.queue.length
  }
}