function selectionsort(arr) {
    let minIndex = 0

    for (let i = 0, len = arr.length; i < len; i++) {
        minIndex = i

        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }

    return arr
}

module.exports = selectionsort
