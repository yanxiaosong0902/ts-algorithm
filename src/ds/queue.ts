/***
*
* @description 队列
*/

interface QueueInterface<T> {
  enqueue(element: T): void
  dequeue(): void
  front(): T
  isEmpty(): boolean
  size(): number
}

class Queue<T> implements QueueInterface<T> {
  private list: T[] = []
  constructor() {}
  enqueue(element: T) {
    this.list.push(element)
  }
  dequeue() {
    this.list.shift()
  }
  front() {
    return this.list[0]
  }
  isEmpty() {
    return this.size() === 0
  }
  size() {
    return this.list.length
  }
}

export default Queue
