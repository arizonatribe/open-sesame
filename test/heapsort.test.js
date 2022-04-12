const assert = require("assert")
const bubblesort = require("../lib/prep/bubble.sort")

describe("Bubble sort", () => {
    it("Should sort a numeric array in ascending order", () => {
        const arr = Array(1000).fill(0).map((_, i) => Math.floor(Math.random() * (1000 + i)))
        const arrCopy = [...arr]
        bubblesort(arr)

        assert.ok(arr.some((v, i) => arrCopy[i] !== v), "Values are no longer in the same spot")
        assert.equal(arr.length, arrCopy.length, "Still the same array, post sort")
        assert.ok(arr.every((v, i) => i === 0 || v >= arr[i - 1]), "Values are in order")
    })
})
