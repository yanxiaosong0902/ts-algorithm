/***
*
* @description 单链表
*/
interface LinkInterface<T> {
  append(element: T): void
  insert(position: number, element: T): boolean
  removeAt(position: number): boolean
  remove(element: T): void
  indexOf(element: T): number
  isEmpty(): boolean
  size(): number
  getHead(): LinkNode<T>
  toString(): void
  print(): void
}
class LinkNode<T> {
  constructor(public element: T, public next?: LinkNode<T>) {}
}
class LinkList<T> implements LinkInterface<T> {
  //protected list: {[key: string]: T} = {}
  protected length: number = 0
  constructor(protected header?: LinkNode<T>) {

  }
  append(element: T) {
    const _element = new LinkNode(element)
    if (this.header === undefined) {
      this.header = _element
    } else {
      let header = this.header
      while (header.next !== undefined) {
        header = header.next
      }
      header.next = _element
    }
    this.length ++
  }
  insert(position: number, element: T) {
    let i = 0
    let _element = new LinkNode(element)
    let current = this.header
    let pre
    if (position === 0) {
      _element.next = this.header
      this.header = _element
      this.length ++
      return true
    } else if(position > this.length || position < 0) {
      console.error('over length')
      return false
    } else {
      while (i < position) {
        pre = current
        current = current.next
        i++
      }
      _element.next = current
      pre.next = _element
      this.length ++
      return true
    }
  }
  size() {
    return this.length
  }
  removeAt(position: number) {
    let i = 0
    let current = this.header
    let pre
    if (position === 0) {
      this.header = this.header.next
      this.length --
      return true
    } else if (position < 0 || position > this.length) {
      console.error('over length')
      return false
    } else {
      while (i < position) {
        pre = current
        current = current.next
        i++
      }
      pre.next = current.next
      this.length --
      return true
    }
  }
  remove(element: T) {
    let current = this.header
    let pre
    if (this.header.element === element) {
      this.header = this.header.next
      this.length --
      return true
    }
    while (current) {
      if (current.element === element) {
        pre.next = current.next
        this.length --
        return true
      }
      pre = current
      current = current.next
    }
    console.error('no exist')
    return false
  }
  indexOf(element: T) {
    let i = 0
    let current = this.header
    while (current) {
      if (current.element === element) {
        return i
      }
      current = current.next
      i++
    }
    return  -1
  }
  isEmpty() {
    return this.length === 0
  }
  getHead() {
    return this.header
  }
  toString() {
    let current = this.header
    let str = ''
    while (current) {
      str += current.element
      current = current.next
    }
    return str
  }
  print() {}
}

export default LinkList
