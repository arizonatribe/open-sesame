const assert = require("assert")
const { HashTable } = require("../lib/prep/hashtable")

describe("Hash table tests", mocha => {
    it("Getter and Setter", () => {
        const ht = new HashTable()

        ht.set("lorem", "ipsum")
        ht.set("dolor", "sit amet")
        ht.set("morel", "muspi")

        const val = ht.get("lorem")

        assert.equal(val, "ipsum")
    })

    it("Retrieve all keys", () => {
        const ht = new HashTable()

        ht.set("blue", "corn")
        ht.set("star", "bucks")
        ht.set("coffee", "trader")

        assert.deepEqual(ht.keys(), ["coffee", "star", "blue"])
    })

    it("Retrieve all values", () => {
        const ht = new HashTable()

        ht.set("blue", "corn")
        ht.set("star", "bucks")
        ht.set("coffee", "trader")

        assert.deepEqual(ht.values(), ["trader", "bucks", "corn"])
    })
})
