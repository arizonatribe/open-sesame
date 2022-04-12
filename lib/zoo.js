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

module.exports = report
