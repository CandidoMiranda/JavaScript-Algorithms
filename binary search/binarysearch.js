function binary_search(list, item) {
    low = 0
    hight = list.length - 1

    while (low <= hight) {
        middle = Math.floor((low + hight) / 2)
        guess = list[middle]

        if (guess == item) {
            return middle
        }
        else if (guess > item) {
            hight = middle - 1
        }
        else {
            low = middle + 1
        }
    }
    
    return null
}

example_list = [1, 3, 4, 5, 7, 9, 10, 11]

console.log(binary_search(example_list, 7))
console.log(binary_search(example_list, 2))
console.log(binary_search(example_list ,-2))
console.log(binary_search(example_list ,12))