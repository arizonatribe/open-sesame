const zoo = {
  bear: ["bigFish", "bug", "chicken", "cow", "leaves", "sheep"],
  panda: ["leaves"],
  giraffe: ["leaves"],
  lion: ["cow", "antelope"],
  sheep: ["grass"],
  bug: ["bug", "leaves"],
  grass: [],
  fox: ["sheep", "chicken"],
  chicken: ["bug"],
  antelope: ["grass"],
  bigFish: ["littleFish"],
  littleFish: [],
  leaves: [],
  cow: ["grass"]
}

function report(strItems) {
  let items= strItems.split(",");
  const sequence = [strItems];

  // Add to the report, recursively
  function feed() {
    for (let i = 0; i < items.length; i++) {
      const leftItem = items[i - 1];
      const predator = items[i];
      const rightItem = items[i + 1];
      const foodItems = zoo[predator] || [];
      
      if (foodItems.includes(leftItem)) {
        items.splice(i - 1, 1);
        return `${predator} eats ${leftItem}`;
      } else if (foodItems.includes(rightItem)) {
        items.splice(i + 1, 1);
        return `${predator} eats ${rightItem}`;
      }
    }
    
    return "";
  }
  
  // yolo
  while (true) {
    let whatHappened = feed();

    if (!whatHappened) {
      sequence.push(items.join(","));
      return sequence;
    }
  
    sequence.push(whatHappened);
  }
}

const inputs = [
  "fox,bug,chicken,grass,sheep",
  "chicken,fox,leaves,bug,grass,sheep",
  "bear,bigFish,lion,cow,bug,leaves",
  "grass,grass,cow,leaves,bug,bigFish,leaves,bear",
  "giraffe,leaves,leaves,leaves,bear,bug,leaves,leaves,panda",
  "bear,grass,grass,grass,grass,sheep,bug,chicken,littleFish,littleFish,littleFish,littleFish,bigFish,bigFish,bigFish",
  "fox,grass,chicken,lion,panda",
  "fox,chicken,tree,chicken,bug,banana,bug,bear"
];

for (let a = 0; a < inputs.length; a++) {
  const output = report(inputs[a]);
  console.log(output);
}
