function selectSort(arr: number[]) {
  const len = arr.length
  let min = 0
  let temp
  for (let i = 0 ; i < len - 1; i ++) {
    min = i
    for (let j = i + 1; i < len; j ++) {
      if (arr[j] < arr [min]) {
        min = j
      }
    }
    temp = arr[min]
    arr[min] = arr[i]
    arr[i] = temp
  }
  console.log(arr)
  return arr
}

export {
  selectSort
}
