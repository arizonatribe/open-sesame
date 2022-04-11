function heapify(arr, chunkLength, idx) {
    let indexOfLargest = idx
    let leftIndex = idx * 2 + 1
    let rightIndex = leftIndex + 1

    if (leftIndex < chunkLength && arr[leftIndex] > arr[indexOfLargest]) {
        indexOfLargest = leftIndex
    }

    if (rightIndex < chunkLength && arr[rightIndex] > arr[indexOfLargest]) {
        indexOfLargest = rightIndex
    }

    if (indexOfLargest !== idx) {
        [arr[indexOfLargest], arr[idx]] = [arr[idx], arr[indexOfLargest]]
        heapify(arr, chunkLength, indexOfLargest)
    }

    return arr
}

function heapsort(arr) {
    const len = arr.length
    let a = Math.floor(len / 2 - 1)
    let b = len - 1

    while (a >= 0) {
        if (a * 2 < len) {
            heapify(arr, len, a)
        }
        a--
    }

    while (b >= 0) {
        [arr[0], arr[b]] = [arr[b], arr[0]]
        heapify(arr, b, 0)
        b--
    }
    return arr
}

module.exports = heapsort
