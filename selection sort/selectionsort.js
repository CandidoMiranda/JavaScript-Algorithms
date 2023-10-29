function seachMinValue(arr) {
    minValue = arr[0]
    minValueIndex = 0
    for(index = 1; index < arr.length; index++) {
        if (arr[index] < minValue) {
            minValue = arr[index]
            minValueIndex = index
        }
    }
    return minValueIndex
}

function selectionSort(arr) {
    newArr = new Array
    i = 0
    while (arr.length > 0) {
        minValueIndex = seachMinValue(arr)
        newArr.push(arr[minValueIndex])
        arr.splice(minValueIndex, 1)
    }
    return newArr
}

console.log(selectionSort([5, 3, 6, 2, 10, 9, 12]))
console.log(selectionSort([8, 13, 9, 1, 5, 3, 10]))
