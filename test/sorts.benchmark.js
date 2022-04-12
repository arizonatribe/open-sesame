const { test } = require("reality-check")

const heapsort = require("../lib/prep/heap.sort")
const quicksort = require("../lib/prep/quick.sort")
const { quicksortB } = require("../lib/prep/quick.sort")
const mergesort = require("../lib/prep/merge.sort")
const bubblesort = require("../lib/prep/bubble.sort")
const insertionsort = require("../lib/prep/insertion.sort")
const selectionsort = require("../lib/prep/selection.sort")

test("Comparing sorts", benchmark => {
    const arr = Array(10000)
        .fill(0)
        .map((_, i) => Math.floor(Math.random() * i))

    benchmark(
        () => {
            const arrCopy = [...arr]
            heapsort(arrCopy)
            return arrCopy
        },
        "Heap sort"
    )

    benchmark(
        () => {
            const arrCopy = [...arr]
            return quicksort(arrCopy)
        },
        "Quick sort"
    )

    benchmark(
        () => {
            const arrCopy = [...arr]
            quicksortB(arrCopy)
            return arrCopy
        },
        "Quick sort (option B)"
    )

    benchmark(
        () => {
            const arrCopy = [...arr]
            return mergesort(arrCopy)
        },
        "Merge sort"
    )

    benchmark(
        () => {
            const arrCopy = [...arr]
            bubblesort(arrCopy)
            return arrCopy
        },
        "Bubble sort"
    )

    benchmark(
        () => {
            const arrCopy = [...arr]
            insertionsort(arrCopy)
            return arrCopy
        },
        "Insertion sort"
    )

    benchmark(
        () => {
            const arrCopy = [...arr]
            selectionsort(arrCopy)
            return arrCopy
        },
        "Selection sort"
    )
})
