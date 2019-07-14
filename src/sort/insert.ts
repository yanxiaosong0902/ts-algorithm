/***
* @description 插入排序，从第二个开始循环，依次跟前面的每个元素比较大小，如果比前一个小，则将前者往后移一位， 先排好的是小的
* @params 时间复杂度 O2
* @return
***/
function insertSort(arr: number[]) {
  const len = arr.length
  for (let i = 1 ; i < len; i ++) {
    let pre = i - 1
    let current = arr[i]
    while (pre > -1 && arr[pre] > current) {
      if (current < arr[pre]) {
        arr[pre + 1] = arr[pre]
        pre --
      }
    }
    arr[pre + 1] = current
  }
  return arr
}
export {
  insertSort
}
