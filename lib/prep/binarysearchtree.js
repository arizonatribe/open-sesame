class Node {
    constructor(value) {
        this.value
        this.left = null
        this.right = null
        this.count = 1
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)

        if (!this.root) {
            this.root = newNode
            return this
        }

        let temp = this.root

        while (true) {
            if (value === temp.value) {
                temp.count++
                return this
            } else if (value < temp.value) {
                if (!temp.left) {
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            } else if (value > temp.value) {
                if (!temp.right) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }

    search(value) {
        if (!this.root) return undefined

        let temp = this.root

        while (temp) {
            if (value === temp.value) {
                return temp
            } else if (value < temp.value) {
                temp = temp.left
            } else if (value > temp.value) {
                temp = temp.right
            } else {
                return undefined
            }
        }
    }

    bfs(value) {
        const queue = []
        const values = []

        queue.push(this.root)

        while (queue.length) {
            let item = queue.shift()
            values.push(item.value)
            if (item.left) queue.push(item.left)
            if (item.right) queue.push(item.right)
        }

        return values
    }

    dfs_preorder(value) {
        const values = []

        function traverse(node) {
            values.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }

        traverse(this.root)

        return values
    }

    dfs_ordered(value) {
        const values = []

        function traverse(node) {
            if (node.left) traverse(node.left)
            values.push(node.value)
            if (node.right) traverse(node.right)
        }

        traverse(this.root)

        return values
    }

    dfs_postorder(value) {
        const values = []

        function traverse(node) {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            values.push(node.value)
        }

        traverse(this.root)

        return values
    }
}

module.exports = {
    Node,
    BinarySearchTree
}
