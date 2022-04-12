function mergelists(arr1, arr2) {
    const leftLen = arr1.length
    const rightLen = arr2.length

    let leftIndex = 0
    let rightIndex = 0

    const merged = Array(leftLen + rightLen)

    while (leftIndex < leftLen && rightIndex < rightLen) {
        if (arr1[leftIndex] > arr2[rightIndex]) {
            merged[leftIndex + rightIndex] = arr2[rightIndex]
            rightIndex++
        } else {
            merged[leftIndex + rightIndex] = arr1[leftIndex]
            leftIndex++
        }
    }

    while (leftIndex < leftLen) {
        merged[leftIndex + rightIndex] = arr1[leftIndex]
        leftIndex++
    }

    while (rightIndex < rightLen) {
        merged[leftIndex + rightIndex] = arr2[rightIndex]
        rightIndex++
    }

    return merged
}

function mergesort(arr) {
    const len = arr.length

    if (len <= 1) {
        return arr
    }

    const midpointIndex = Math.floor(len / 2)

    const arrLeft = arr.slice(0, midpointIndex)
    const arrRight = arr.slice(midpointIndex, len)

    return mergelists(
        mergesort(arrLeft),
        mergesort(arrRight)
    )
}

module.exports = mergesort
