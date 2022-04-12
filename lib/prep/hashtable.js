function hash(str, limit = 26) {
    let sum = 0

    for (let i = 0, len = str.length; i < len; i++) {
        sum += str.charCodeAt(i)
    }

    return sum % limit
}

class HashTable {
    constructor(size = 7) {
        this.dataMap = []
        this.size = size
    }

    get(key) {
        let idx = hash(key, this.size)

        if (this.dataMap[idx]) {
            let len = this.dataMap[idx].length
            let i = 0

            while (i < len) {
                if (this.dataMap[idx][i][0] === key) {
                    return this.dataMap[idx][i][1]
                }
                count++
            }
        }

        return undefined
    }

    set(key, val) {
        let idx = hash(key, this.size)

        if (!this.dataMap[idx]) {
            this.dataMap[idx] = []
        }

        this.dataMap[idx].push([key, val])

        return idx
    }

    keys() {
        const keys = []
        for (let i = 0; i < this.size; i++) {
            if (Array.isArray(this.dataMap[i])) {
                for (let j = 0, len = this.dataMap[i].length; j < len; j++) {
                    keys.push(this.dataMap[i][j][0])
                }
            }
        }

        return keys
    }

    values() {
        const values = []
        for (let i = 0; i < this.size; i++) {
            if (Array.isArray(this.dataMap[i])) {
                for (let j = 0, len = this.dataMap[i].length; j < len; j++) {
                    values.push(this.dataMap[i][j][1])
                }
            }
        }

        return values
    }
}

module.exports = {
    HashTable
}
