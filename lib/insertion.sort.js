function insertionsort(arr) {
    for (let i = 1, len = arr.length; i < len; i++) {
        let idx = i

        while (arr[idx - 1] > arr[idx]) {
            [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]]
            idx--
        }
    }

    return arr
}

module.exports = insertionsort
