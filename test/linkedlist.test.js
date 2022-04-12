const t = require("assert")
const { Node, LinkedList } = require("../lib/linkedlist")

describe("Linked list", () => {
    let ll

    it("Create a new node", () => {
        const newNode = new Node(17)
        t.equal(newNode.value, 17, "Should contain the value it was instantiated with")
        t.equal(newNode.next, null, "Should initially be null for the next node")
    })

    it("Create a linked list", () => {
        ll = new LinkedList()
        t.equal(
            ll.length,
            0,
            "Should have been initialized with a length of 0"
        )
        t.equal(
            ll.head,
            null,
            "Initially the head is null"
        )
        t.equal(
            ll.tail,
            null,
            "Initially the tail is null"
        )

        ll.set(0, 11)

        t.deepEqual(
            ll.head,
            new Node(11),
            "The head is now an instance of that node with the initial value"
        )
        t.deepEqual(
            ll.head,
            new Node(11),
            "The tail matches the head"
        )
    })

    it("Push onto a linked list", () => {
        const result = ll.push(7)

        t.equal(
            ll.length,
            2,
            "Should increment the length after a successful push"
        )
        t.equal(
            ll.head.value,
            11,
            "The head is still the original node"
        )
        t.deepEqual(
            ll.tail,
            new Node(7),
            "The new node is now the tail too"
        )
        t.deepEqual(
            ll.head.next,
            ll.tail,
            "The head points to the tail"
        )
        t.ok(
            ["head", "tail", "length"].every(prop => result[prop] != null),
            "Should return the whole instance of the Linked list"
        )
    })

    it("Get a node from a linked list", () => {
        const node = ll.get(1)
        t.deepEqual(
            node,
            new Node(7),
            "Should retrieve the node just pushed onto the list"
        )
    })

    it("Set a node onto a linked list", () => {
        ll.set(1, 17)

        t.deepEqual(
            ll.get(1).value,
            17,
            "Should retrieve the node just set into the old index of 1"
        )

        t.deepEqual(
            ll.get(2).value,
            7,
            "Should retrieve the node which used to be at index 1"
        )
    })

    it("Remove an item from a linked list", () => {
        const result = ll.remove(1)

        t.equal(
            result,
            true,
            "Should return 'true' if successfully removed"
        )

        t.deepEqual(
            ll.length,
            2,
            "Should decrement the list after removal"
        )
    })

    it("Pop from a linked list", () => {
        t.deepEqual(
            ll.head.next,
            new Node(7),
            "The head should be pointing to the 2nd to last node"
        )
        t.deepEqual(
            ll.tail,
            new Node(7),
            "The tail (about to be popped)"
        )
        t.deepEqual(
            ll.head.next,
            ll.tail,
            "The head should be pointing to the tail"
        )

        let result = ll.pop()

        t.equal(
            ll.length,
            1,
            "Should decrement the length after a successful pop"
        )

        t.deepEqual(
            result,
            new Node(7),
            "Should return the popped Node"
        )
        t.deepEqual(
            ll.head,
            new Node(11),
            "The head is that original Node"
        )
        t.deepEqual(
            ll.head,
            ll.tail,
            "The head and tail are the same"
        )
        t.equal(
            ll.tail.next,
            null,
            "The tail should NOT be pointing to anything"
        )

        result = ll.pop()

        t.deepEqual(
            result,
            new Node(11),
            "Should return the original head Node"
        )
        t.equal(
            ll.length,
            0,
            "Now the linked list is empty"
        )
        t.equal(
            ll.head,
            null,
            "Now the linked list head is null"
        )
        t.deepEqual(
            ll.head,
            ll.tail,
            "The head and tail are both null"
        )

        result = ll.pop()

        t.equal(
            result,
            null,
            "Any further pops just return null"
        )
        t.equal(
            ll.length,
            0,
            "The linked list length doesn't drop below zero"
        )
    })

    it("Unshift a new Node (creates a new head)", () => {
        let result = ll.unshift(21)

        t.equal(
            ll.length,
            1,
            "The linked list length now is now up to 1 again"
        )
        t.deepEqual(
            result,
            new Node(21),
            "Returns the new node"
        )
        t.deepEqual(
            ll.head,
            new Node(21),
            "The head is now the new node"
        )
        t.deepEqual(
            ll.head,
            ll.tail,
            "The head and tail are the same"
        )

        result = ll.unshift(73)

        t.equal(
            ll.length,
            2,
            "Added the new node increases the length"
        )
        t.deepEqual(
            ll.head.value,
            73,
            "The new node is now the head"
        )
        t.deepEqual(
            ll.tail,
            new Node(21),
            "The old node is now the tail"
        )
        t.deepEqual(
            ll.head.next,
            new Node(21),
            "The head points to the tail"
        )
    })

    it("Shift the Node (removes the old head)", () => {
        let result = ll.shift()

        t.deepEqual(
            result,
            new Node(73),
            "The head is returned"
        )
        t.deepEqual(
            ll.head,
            new Node(21),
            "The tail is now the new head"
        )
        t.deepEqual(
            ll.head,
            ll.tail,
            "The head and tail are the same"
        )
        t.equal(
            ll.head.next,
            null,
            "The head no longer points to anything"
        )
        t.equal(
            ll.length,
            1,
            "Length reflects only one node left in the list"
        )

        result = ll.shift()

        t.deepEqual(
            result,
            new Node(21),
            "The head is returned"
        )
        t.equal(
            ll.head,
            null,
            "There is no more head on the list"
        )
        t.equal(
            ll.head,
            ll.tail,
            "There is no more tail either"
        )
        t.equal(
            ll.length,
            0,
            "Length reflects no nodes left"
        )

        result = ll.shift()

        t.equal(
            result,
            undefined,
            "Nothing left to return"
        )
        t.equal(
            ll.length,
            0,
            "Length doesn't doesn't drop below zero"
        )

    })
})
