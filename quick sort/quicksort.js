function quicksort(array) {
    var smaller = []
    var larger = []
    if (array.length < 2) {
        return array
    }
    pivot = array[0]
    for (var i = 1; i < array.length; i++) {
        if (array[i] <= pivot) {
            smaller.push(array[i])
        }
        if (array[i] > pivot) {
            larger.push(array[i])
        }
    }
    return quicksort(smaller).concat(array[0], quicksort(larger))
}

console.log(quicksort([10, 5, 2, 3]))
