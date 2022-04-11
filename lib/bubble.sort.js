function bubblesort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

function bubblesortB(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}

module.exports = bubblesort
