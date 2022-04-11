const { test } = require("reality-check")

const heapsort = require("../lib/heap.sort")
const quicksort = require("../lib/quick.sort")
const mergesort = require("../lib/merge.sort")
const bubblesort = require("../lib/bubble.sort")
const insertionsort = require("../lib/insertion.sort")
const selectionsort = require("../lib/selection.sort")

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
