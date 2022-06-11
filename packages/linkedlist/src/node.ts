export class Node<T> {
  data: T
  next: Node<T>
  prev: Node<T>
  constructor(data: T) {
    this.data = data
    this.next = null
    this.prev = null
  }
}