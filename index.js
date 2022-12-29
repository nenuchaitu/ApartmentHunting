function renderOutput(maxDistances) {
  const minDistance = Math.min(...maxDistances);
  const minDistanceNodes = [];
  maxDistances.forEach((distance, index) => {
    if (distance === minDistance) {
      minDistanceNodes.push(index + 1);
    }
  });
  console.log(minDistanceNodes);
  let blocksString = "";
  for (let i = 0; i < minDistanceNodes.length; i++) {
    if (i == minDistanceNodes.length - 1 && minDistanceNodes.length > 1) {
      blocksString = blocksString + ` and ${minDistanceNodes[i]}`;
    } else {
      blocksString = blocksString + `${minDistanceNodes[i]} `;
    }
  }
  const finalString = `Possible blocks to move for minimum travel ${
    minDistanceNodes.length == 1 ? "is at block" : "are at blocks"
  } ${blocksString}`;
  console.log(finalString);
}

function apartmentHunting(blocks, reqs) {
  // Write your code here.
  let maxDistancesAtNode = blocks.map(() => 0);
  for (let i = 0; i < blocks.length; i++) {
    reqs.forEach((req) => {
      let closestDistance = blocks.length - 1;
      blocks.forEach((block, j) => {
        if (block[req]) {
          closestDistance = Math.min(closestDistance, Math.abs(i - j));
        }
      });
      maxDistancesAtNode[i] = Math.max(maxDistancesAtNode[i], closestDistance);
    });
  }
  renderOutput(maxDistancesAtNode);
}

apartmentHunting(
  [
    {
      gym: false,
      school: true,
      store: false,
    },
    {
      gym: true,
      school: false,
      store: false,
    },
    {
      gym: true,
      school: true,
      store: false,
    },
    {
      gym: false,
      school: true,
      store: false,
    },
    {
      gym: false,
      school: true,
      store: true,
    },
  ],
  ["gym", "school", "store"]
);
// Do not edit the line below.
exports.apartmentHunting = apartmentHunting;
