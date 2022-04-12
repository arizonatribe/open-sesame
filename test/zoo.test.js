const assert = require("assert")
const report = require("../lib/zoo")

describe("Report on the animals and items in a Zoo", () => {
    const expectedOutput = [
        [
          "fox,bug,chicken,grass,sheep",
          "chicken eats bug",
          "fox eats chicken",
          "sheep eats grass",
          "fox eats sheep",
          "fox"
        ], [
          "chicken,fox,leaves,bug,grass,sheep",
          "fox eats chicken",
          "bug eats leaves",
          "sheep eats grass",
          "fox,bug,sheep"
        ], [
          "bear,bigFish,lion,cow,bug,leaves",
          "bear eats bigFish",
          "lion eats cow",
          "bug eats leaves",
          "bear,lion,bug"
        ], [
          "grass,grass,cow,leaves,bug,bigFish,leaves,bear",
          "cow eats grass",
          "cow eats grass",
          "bug eats leaves",
          "bear eats leaves",
          "bear eats bigFish",
          "bear eats bug",
          "bear eats cow",
          "bear"
        ], [
          "giraffe,leaves,leaves,leaves,bear,bug,leaves,leaves,panda",
          "giraffe eats leaves",
          "giraffe eats leaves",
          "giraffe eats leaves",
          "bear eats bug",
          "bear eats leaves",
          "bear eats leaves",
          "giraffe,bear,panda"
        ], [
          "bear,grass,grass,grass,grass,sheep,bug,chicken,littleFish,littleFish,littleFish,littleFish,bigFish,bigFish,bigFish",
          "sheep eats grass",
          "sheep eats grass",
          "sheep eats grass",
          "sheep eats grass",
          "bear eats sheep",
          "bear eats bug",
          "bear eats chicken",
          "bigFish eats littleFish",
          "bigFish eats littleFish",
          "bigFish eats littleFish",
          "bigFish eats littleFish",
          "bear eats bigFish",
          "bear eats bigFish",
          "bear eats bigFish",
          "bear"
        ]
    ]

    it("Should report the sequence of feedings for each input of animals/items", () => {
        for (let i = 0; i < expectedOutput.length; i++) {
            const expected = expectedOutput[i]
            const actual = report(expected[0])
            assert.deepEqual(actual, expected)
        }
    })
})
