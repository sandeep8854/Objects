const items = [
  {
    name: "Orange",
    available: true,
    contains: "Vitamin C",
  },
  {
    name: "Mango",
    available: true,
    contains: "Vitamin K, Vitamin C",
  },
  {
    name: "Pineapple",
    available: true,
    contains: "Vitamin A",
  },
  {
    name: "Raspberry",
    available: false,
    contains: "Vitamin B, Vitamin A",
  },
  {
    name: "Grapes",
    contains: "Vitamin D",
    available: false,
  },
];
//-------------------------------------------------------------------------
// Question:-1  Get all items that are available

function getItem(items) {
  const itemAvailabe = items.reduce((acc, ele) => {
    if (ele.available) {
      acc.push(ele);
    }
    return acc;
  }, []);
  return itemAvailabe;
}
// console.log(getItem(items));
//----------------------------------------------------------------------------
// Questions:- 2 Get all items containing only Vitamin C.

function onlyVitaminC(items) {
  const onlyVitamin = items.reduce((acc, ele) => {
    let containVitaminC = ele.contains.includes("Vitamin C");
    const onlyC = containVitaminC && ele.contains.split(", ").length === 1;

    if (onlyC) {
      acc.push(ele);
    }
    return acc;
  }, []);
  return onlyVitamin;
}

// console.log(onlyVitaminC(items));

//--------------------------------------------------------------------------
// Questions-3 Get all items containing Vitamin A.

function onlyVitaminK(items) {
  const vitamink = items.reduce((acc, curr) => {
    let present = curr.contains.includes("Vitamin K");
    if (present) {
      acc.push(curr);
    }
    return acc;
  }, []);
  return vitamink;
}

// console.log(onlyVitaminK(items));
//--------------------------------------------------------------------------
// Question:-4. Group items based on the Vitamins that they contain in the following format:
//  {
//      "Vitamin C": ["Orange", "Mango"],
//     "Vitamin K": ["Mango"],
// }
//  Best concept in the world. remember.
function groupBased(items) {
  const groups = items.reduce((acc, curr) => {
    if (curr.contains) {
      const vitamin = curr.contains.split(", ");
      vitamin.map((ele) => {
        if (!acc[ele]) {
          acc[ele] = [];
        }
        acc[ele].push(curr.name);
      });
    }
    return acc;
  }, {});
  return groups;
}
// console.log(groupBased(items));

//---------------------------------------------------------------------------
//  Questions:- 5  Sort items based on number of Vitamins they contain.

function basedOnNumberOfFunc(items) {
  const sorted = items.sort((a, b) => {
    const numberA = a.contains.split(", ").length;
    const numberB = b.contains.split(", ").length;
    if (numberA < numberB) {
      return -1;
    } else if (numberA > numberB) {
      return 1;
    } else {
      return 0;
    }
  });
  return sorted;
}
console.log(basedOnNumberOfFunc(items));
