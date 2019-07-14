import Dictory from './ds/dict'
import LinkList from './ds/link'
import DoubleLink from './ds/doubleLink'
import Bst from './ds/bst'
let dict = new Dictory()
dict.set('name', 'yanxiaosong')
dict.set('1', 123)
console.log(dict)

let link = new LinkList()
link.append('1')
link.append('2')
link.append('3')
link.insert(1,4)
link.remove('3')
console.log(link)

console.log('-------------')

let dl = new DoubleLink()
dl.append('1')
dl.append('2')
dl.append('3')
dl.append('4')
dl.insert(2,'5')
dl.insert(5, '6')
dl.removeAt(5)
console.log(dl)

console.log('-------------')
let bst = new Bst()
bst.append(5)
bst.append(3)
bst.append(7)
bst.append(1)
bst.append(8)
bst.inOrderTravserse(function(e:any) {
  console.log(e)
})
console.log(bst)
console.log('--------------')
import {bubbleSort} from './sort/bubble'
import {selectSort} from './sort/selectSort'
let arr = [1,5,3,6,8,2,6,3,9]
console.log(bubbleSort(arr))
//console.log(selectSort(arr))
