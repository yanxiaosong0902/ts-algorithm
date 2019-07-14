/***
* @description 冒泡排序， 从第一个开始，前后对比，如果前者比后者大，则交换两个的顺序，先排序好的是后面大的。
* @params 空间复杂度O1， 时间复杂度O2
* @return
***/
function bubbleSort(arr: number[]) {
  const len = arr.length
  for (let i = 0 ; i < len - 1 ; i ++) {
    for (let j = 0; j < len - i - 1; j ++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
export {
  bubbleSort
}
