# Background

A freak power outage at the zoo has caused all of the electric cage doors to malfunction and swing open...
All the animals are out and some of them are eating each other!

It's a Zoo Disaster!

# Animals

Here is a list of zoo animals, and what they can eat:

- antelope eats grass
- big-fish eats little-fish
- bug eats bug 
- bug eats leaves
- bear eats big-fish
- bear eats bug
- bear eats chicken
- bear eats cow
- bear eats leaves
- bear eats sheep
- chicken eats bug
- cow eats grass
- fox eats chicken
- fox eats sheep
- giraffe eats leaves
- lion eats antelope
- lion eats cow
- panda eats leaves
- sheep eats grass

# Problem

__INPUT__

A comma-separated string representing all the things at the zoo

__TASK__

Figure out who eats who until no more eating is possible.

__OUTPUT__

A list of strings (refer to the example below) where:

- The first element is the initial zoo (same as INPUT)
- The last element is a comma-separated string of what the zoo looks like when all the eating has finished
- All other elements (2nd to last-1) are of the form X eats Y describing what happened

__Rules__

- Animals can only eat things beside them
- Animals always eat to their LEFT before eating to their RIGHT
- Always the LEFTMOST animal capable of eating will eat before any others
- Any other things you may find at the zoo (which are not listed above) do not eat anything and are not edible
A list of test inputs with expected outputs is listed below. Your solution should pass all of these test cases. Preferably with written tests!

### Example

__Input__:

`"fox,bug,chicken,grass,sheep"`

__Output__:

```javascript
[
  "fox,bug,chicken,grass,sheep", 
  "chicken eats bug", 
  "fox eats chicken", 
  "sheep eats grass", 
  "fox eats sheep", 
  "fox"
]
```

A walkthrough of how it all works:

1. fox can't eat bug -> `"fox,bug,chicken,grass,sheep"`
2. bug can't eat anything -> `"fox,bug,chicken,grass,sheep"`
3. chicken eats bug -> `"fox,chicken,grass,sheep"`
4. fox eats chicken -> `"fox,grass,sheep"`
5. fox can't eat grass -> `"fox,grass,sheep"`
6. grass can't eat anything -> `"fox,grass,sheep"`
7. sheep eats grass -> `"fox,sheep"`
8. fox eats sheep -> `"fox"`

## Test Cases

__Input__: 

`"fox,bug,chicken,grass,sheep"`

__Output__: 

```javascript
[
  "fox,bug,chicken,grass,sheep",
  "chicken eats bug",
  "fox eats chicken",
  "sheep eats grass",
  "fox eats sheep",
  "fox"
]
```

__Input__: 

`"chicken,fox,leaves,bug,grass,sheep"`

__Output__: 

```javascript
[
  "chicken,fox,leaves,bug,grass,sheep",
  "fox eats chicken",
  "bug eats leaves",
  "sheep eats grass",
  "fox,bug,sheep"
]
```

__Input__: 

`"bear,big-fish,lion,cow,bug,leaves"`

Output: 

```javascript
[
  "bear,big-fish,lion,cow,bug,leaves",
  "bear eats big-fish",
  "lion eats cow",
  "bug eats leaves",
  "bear,lion,bug"
]
```

__Input__: 

`"grass,grass,cow,leaves,bug,big-fish,leaves,bear"`

__Output__: 

```javascript
[
  "grass,grass,cow,leaves,bug,big-fish,leaves,bear",
  "cow eats grass",
  "cow eats grass",
  "bug eats leaves",
  "bear eats leaves",
  "bear eats big-fish",
  "bear eats bug",
  "bear eats cow",
  "bear"
]
```

__Input__:

`"giraffe,leaves,leaves,leaves,bear,bug,leaves,leaves,panda"`

__Output__:

```javascript
[
  "giraffe,leaves,leaves,leaves,bear,bug,leaves,leaves,panda",
  "giraffe eats leaves",
  "giraffe eats leaves",
  "giraffe eats leaves",
  "bear eats bug",
  "bear eats leaves",
  "bear eats leaves",
  "giraffe,bear,panda"
]
```

__Input__:

`"bear,grass,grass,grass,grass,sheep,bug,chicken,little-fish,little-fish,little-fish,little-fish,big-fish,big-fish,big-fish"`

__Output__:

```javascript
[
  "bear,grass,grass,grass,grass,sheep,bug,chicken,little-fish,little-fish,little-fish,little-fish,big-fish,big-fish,big-fish",
  "sheep eats grass",
  "sheep eats grass",
  "sheep eats grass",
  "sheep eats grass",
  "bear eats sheep",
  "bear eats bug",
  "bear eats chicken",
  "big-fish eats little-fish",
  "big-fish eats little-fish",
  "big-fish eats little-fish",
  "big-fish eats little-fish",
  "bear eats big-fish",
  "bear eats big-fish",
  "bear eats big-fish",
  "bear"
]
```

__Input__: 

`"fox,grass,chicken,lion,panda"`

__Output__: 

```javascript
[
  "fox,grass,chicken,lion,panda",
  "fox,grass,chicken,lion,panda"
]
```

__Input__: 

`"fox,chicken,tree,chicken,bug,banana,bug,bear"`

__Output__: 

```javascript
[
  "fox,chicken,tree,chicken,bug,banana,bug,bear",
  "fox eats chicken",
  "chicken eats bug",
  "bear eats bug",
  "fox,tree,chicken,banana,bear"
]
```

# References

From [the-hunger-games-zoo-disaster](https://www.codewars.com/kata/the-hunger-games-zoo-disaster)

Implemented during the interview at [this fiddle](https://jsfiddle.net/arizonatribe/v1darg4q/4/)
