const assert = require("assert")
const quicksort = require("../lib/prep/quick.sort")

describe("quick sort", () => {
    it("Should sort a numeric array in ascending order", () => {
        const arr = Array(1000).fill(0).map((_, i) => Math.floor(Math.random() * (1000 + i)))
        const result = quicksort(arr)

        assert.ok(result.some((v, i) => arr[i] !== v), "Values are no longer in the same spot")
        assert.equal(result.length, arr.length, "Still the same array, post sort")
        assert.ok(result.every((v, i) => i === 0 || v >= result[i - 1]), "Values are in order")
    })
})
