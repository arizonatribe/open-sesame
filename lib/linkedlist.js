class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    unshift(val) {
        const newNode = new Node(val)

        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
            this.length++
            return newNode
        }

        let temp = this.head
        newNode.next = temp
        this.head = newNode
        this.length++

        return this
    }

    push(val) {
        const newNode = new Node(val)

        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
            this.length++
            return newNode
        }

        let temp = this.head

        while (temp.next) {
            temp = temp.next
        }

        temp.next = newNode
        this.tail = temp.next
        this.length++

        return this
    }

    shift() {
        if (this.length === 0) {
            return undefined
        }

        if (this.length === 1) {
            let temp = this.head
            this.head = null
            this.tail = null
            this.length--
            return temp
        }

        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--

        return temp
    }

    pop() {
        if (this.length === 0) {
            return undefined
        }

        if (this.length === 1) {
            let temp = this.tail
            this.head = null
            this.tail = null
            this.length--
            return temp
        }

        let temp = this.tail
        this.length--
        let prev = this.get(this.length - 1)
        prev.next = null
        this.tail = prev
        return temp
    }

    remove(key) {
        if (key < 0 || key >= this.length) {
            return false
        }

        if (key === 0) {
            return this.shift()
        } else if (key === this.length - 1) {
            return this.pop()
        }

        let prev = this.get(key - 1)
        prev.next = prev.next.next || null
        this.length--
        return true
    }

    get(key) {
        if (key < 0 || key >= this.length) return undefined

        let idx = 0
        let node = this.head

        while (idx < key) {
            node = node.next
            idx++
        }

        return node
    }

    set(key, val) {
        if (key < 0) return undefined

        if (key === this.length) {
            return this.push(val)
        } else if (key > this.length) {
            return undefined
        } else if (key === 0) {
            return this.unshift(val)
        }

        const newNode = new Node(val)

        let prev = this.get(key - 1)
        let temp = prev.next
        newNode.next = temp
        prev.next = newNode
        this.length++

        return this
    }
}

module.exports = {
    Node,
    LinkedList
}
