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
}