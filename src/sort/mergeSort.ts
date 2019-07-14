/***
* @description 归并排序，分治法的思想， 将数组进行1分为2，一直分解下去，递归调用排序算法
* @params
* @return
***/
function mergeSort<T>(arr: number[]) : number[]| T{
  const len = arr.length
  if (len < 2) {
    return arr
  }
  const middle = Math.floor(len / 2)
  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)))
}
function merge(left: number[], right: number[]) {
  let result = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  return result
}
export {
  mergeSort
}
