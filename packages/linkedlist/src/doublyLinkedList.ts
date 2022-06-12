import { Node } from './node'
export class DoubledLinkedList<T> {
  head: Node<T>
  tail: Node<T>

  constructor() {
    this.head = null
    this.tail = null
  }

  add(item: T) {
    const node: Node<T> = new Node<T>(item)

    if (!this.head) {
      this.head = node
      this.tail = node
      return
    }

    node.prev = this.tail
    this.tail.next = node
    this.tail = node
  }

  addAt(index: number, item: T) {
    let current: Node<T> = this.head

    let counter: number = 1
    const node: Node<T> = new Node<T>(item)

    if (index === 0) {
      this.head.prev = current.prev
      current.prev.next = node
      node.next = current
      current.prev = node
      return
    }

    while (current) {
      current = current.next
      if (counter === index) {
        node.prev = current.prev
        current.prev.next = node
        node.next = current
        current.prev = node
      }
      counter++
    }
  }

  remove(item: T) {
    let current: Node<T> = this.head

    while (current) {
      if (current.data === item) {
        if (current === this.head && current === this.tail) {
          this.head = null
          this.tail = null
        } else if (current === this.head) {
          this.head = this.head.next
          this.head.prev = null
        } else if (current === this.tail) {
          this.tail = this.tail.prev
          this.tail.next = null
        } else {
          current.prev.next = current.next
          current.next.prev = current.prev
        }
      }
      current = current.next
    }
  }

  removeAt(index: number) {
    let current: Node<T> = this.head
    let counter: number = 1
    if (index === 0) {
      this.head = this.head.next
      this.head.prev = null
      return
    }

    while (current) {
      current = current.next
      if (current === this.tail) {
        this.tail = this.tail.prev
        this.tail.next = null
      }
      if (counter === index) {
        current.prev.next = current.next
        current.next.prev = current.prev
      }
      counter++
    }
  }

  reverse() {
    let current: Node<T> = this.head
    let prev: Node<T> = null

    while (current) {
      const next: Node<T> = current.next

      current.next = prev
      current.prev = next

      prev = current
      current = next
    }

    this.tail = this.head
    this.head = prev
  }

  swap(index1: number, index2: number): boolean {

    if (index1 > index2) {
      return this.swap(index2, index1)
    }

    let current: Node<T> = this.head
    let counter: number = 0
    let firstNode: Node<T> = null

    while (current) {
      if (counter === index1) {
        firstNode = current
      } else if (counter === index2) {
        [current.data, firstNode.data] = [firstNode.data, current.data]
      }
      current = current.next
      counter++
    }

    return true
  }

  isEmpty(): boolean {
    return this.length() < 1
  }

  length(): number {
    let current: Node<T> = this.head
    let counter: number = 0
    while (current) {
      counter++
      current = current.next
    }
    return counter
  }

  traverse(fn: (node: Node<T>) => void): boolean {
    let current = this.head
    while (current) {
      fn(current)
      current = current.next
    }
    return true
  }

  search(item: T): number {
    let current: Node<T> = this.head
    let counter: number = 0

    while (current) {
      if (current.data === item) {
        return counter
      }

      current = current.next
      counter++
    }

    return -1
  }
}