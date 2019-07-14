/***
*
* @description 双向链表
*/


interface DoubleLinkInterface<T> {
  append(element: T): void
  insert(position: number, element: T): void
}
class DoubleLinkNode<T> {
  constructor(public element: T, public left?: DoubleLinkNode<T>, public right?: DoubleLinkNode<T>) {}
}
class DoubleLink<T> implements DoubleLinkInterface<T> {
  constructor(protected header?: DoubleLinkNode<T>, protected length:number = 0, protected tail?: DoubleLinkNode<T>) {}
  append(element: T) {
    let _element = new DoubleLinkNode(element)
    let current = this.header
    if (this.header === undefined) {
      this.header = _element
      this.tail = _element
    } else {
      while (current.right) {
        current = current.right
      }
      current.right = _element
      _element.left = current
      this.tail = _element
    }
    this.length ++
  }
  insert(position: number, element: T) {
    //debugger
    let _element = new DoubleLinkNode(element)
    let current = this.header
    let pre
    let index = 0
    if (position === 0) {
      _element.right = this.header
      this.header = _element
      this.length ++
    } else if (position < 0 || position > this.length) {
      console.error('over length')
    } else if (position === this.length) {
      pre = this.tail
      pre.right = _element
      _element.left = pre
      this.tail = _element
      this.length ++
    } else {
      while (index < position) {
        pre = current
        current = current.right
        index ++
      }
      _element.left = pre
      pre.right = _element
      current.left = _element
      _element.right = current
      this.length ++
    }
  }
  removeAt(position: number) {
    if (position < 0 || position > this.length) {
      console.error('over length')
      return false
    }
    let current = this.header
    let pre
    let index = 0
    if (position === 0) {
      this.header = current.right
      this.header.left = undefined
      this.length --
    } else if (position === this.length -1) {
      this.tail = this.tail.left
      this.tail.right = undefined
      this.length --
    } else {
      while (index < position) {
        pre = current
        current = current.right
        index ++
      }
      pre.right = current.right
      current.left = pre
      this.length --
    }
  }
}

export default DoubleLink
