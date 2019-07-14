/***
*
* @description 二叉搜索树
*/
interface BstInterface<T> {
  append(element: T): void
  search(element: T): boolean
  inOrderTravserse(callback: Function): void //中序遍历 排序
  frontOrderTraverse(callback: Function): void // 先序遍历 输出结构性的文档
  afterOrderTraverse(callback: Function): void // 后序遍历 计算文件大小
}
class BstNode<T> {
  constructor(public element: T, public left?: BstNode<T>, public right?: BstNode<T>) {}
}
class Bst<T> implements BstInterface<T> {
  constructor(protected root?: BstNode<T>, protected length: number = 0) {}
  append(element: T) {
    let _element = new BstNode(element)
    if (this.root === undefined) {
      this.root = _element
    } else {
      this.appendNode(this.root, _element)
      this.length ++
    }
  }
  private appendNode(parent: BstNode<T>, node: BstNode<T>) {
    if (node.element < parent.element) {
      if (parent.left === undefined) {
        parent.left = node
        return
      }
      this.appendNode(parent.left, node)
    } else {
      if (parent.right === undefined) {
        parent.right = node
        return
      }
      this.appendNode(parent.right, node)
    }
  }
  search(element: T) {
    let current = this.root
    while (current) {
      if (current.element === element) {
        return true
      } else if (current.element < element) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }
  inOrderTravserse(callback: Function) {
    this.inOrderTravserseNode(this.root, callback)
  }
  private inOrderTravserseNode(node: BstNode<T>, callback: Function) {
    if (node === undefined) {
      return
    }
    this.inOrderTravserseNode(node.left, callback)
    callback(node.element)
    this.inOrderTravserseNode(node.right, callback)
  }
  frontOrderTraverse(callback: Function) {
    this.frontOrderTraverseNode(this.root, callback)
  }
  private frontOrderTraverseNode(node: BstNode<T>, callback: Function) {
    if (node === undefined) {
      return
    }
    callback()
    this.frontOrderTraverseNode(node.left, callback)
    this.frontOrderTraverseNode(node.right, callback)
  }
  afterOrderTraverse(callback: Function) {
    this.afterOrderTraverseNode(this.root, callback)
  }
  private afterOrderTraverseNode(node: BstNode<T>, callback: Function) {
    if (node === undefined) {
      return
    }
    this.afterOrderTraverseNode(node.left, callback)
    this.afterOrderTraverseNode(node.right, callback)
    callback()
  }
}

export default Bst
