interface StackInterface<T> {
  push(element: T): void
  pop(): void
  peek(): T
  isEmpty(): boolean
  clear(): void
  size(): number
}

class Stack<T> implements StackInterface<T> {
  constructor(protected list: Array<T>) {}
  push(element: T) {
    this.list.push(element)
  }
  pop() {
    this.list.pop()
  }
  peek() {
    return this.list[this.size() - 1]
  }
  isEmpty() {
    return this.size() === 0
  }
  clear() {
    this.list = []
  }
  size(){
    return this.list.length
  }
}
export default Stack
