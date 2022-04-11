function concatlists(arrLower, arrMiddle, arrHigher) {
    const leftLen = arrLower.length
    const middleLen = arrMiddle.length
    const rightLen = arrHigher.length

    let currentIndex = 0
    const merged = Array(leftLen + middleLen + rightLen)

    while (currentIndex < leftLen) {
        merged[currentIndex] = arrLower[currentIndex]
        currentIndex++
    }

    while (currentIndex < leftLen + middleLen) {
        merged[currentIndex] = arrMiddle[currentIndex - leftLen]
        currentIndex++
    }

    while (currentIndex < leftLen + middleLen + rightLen) {
        merged[currentIndex] = arrHigher[currentIndex - leftLen - middleLen]
        currentIndex++
    }

    return merged
}

function quicksort(arr) {
    const len = arr.length

    if (len <= 1) {
        return arr
    }

    const pivot = arr[len - 1]
    const arrLower = []
    const arrMiddle = []
    const arrHigher = []

    for (let i = 0; i < len; i++) {
        if (arr[i] < pivot) {
            arrLower.push(arr[i])
        } else if (arr[i] > pivot) {
            arrHigher.push(arr[i])
        } else {
            arrMiddle.push(arr[i])
        }
    }

    return concatlists(
        arrLower.length === 0 ? [] : quicksort(arrLower),
        arrMiddle,
        arrHigher.length === 0 ? [] : quicksort(arrHigher)
    )
}

module.exports = quicksort
