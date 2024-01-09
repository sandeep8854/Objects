const product = [
  {
    shampoo: {
      price: "$50",
      quantity: 4,
    },
    HairOil: {
      price: "$40",
      quantity: 2,
      sealed: true,
    },
    comb: {
      price: "$12",
      quantity: 1,
    },
    utensils: [
      {
        spoons: { quantity: 2, price: "$8" },
      },
      {
        glasses: { quantity: 1, price: "$70", type: "fragile" },
      },
      {
        cooker: { quantity: 4, price: "$900" },
      },
    ],
    watch: {
      price: "$800",
      quantity: 1,
      type: "fragile",
    },
  },
];

// Q1. Find all the items with price more than $65.
// Q2. Find all the items where quantity ordered is more than 1.
// Q.3 Get all items which are mentioned as fragile.

function findEniqu(product) {
  // step -1
  //   let ex = Object.keys(product[0]);
  //   console.log(ex);

  const expensiveItems = Object.keys(product[0]).reduce((acc, category) => {
    const item = product[0][category];
    // console.log(item);
    if (Array.isArray(item)) {
      item.forEach((subItem) => {
        // console.log(subItem);
        const subItemKey = Object.keys(subItem)[0];
        const subItemValue = subItem[subItemKey];
        if (subItemValue.price && parseInt(subItemValue.price.slice(1)) > 65) {
          acc.push({ [subItemKey]: subItemValue });
        }
      });
    } else {
      if (item.price && parseInt(item.price.slice(1)) > 65) {
        acc.push({ [category]: item });
      }
    }
    return acc;
  }, []);
  return expensiveItems;
}
//console.log(findEniqu(product));

/*
Output:- 
[
  { glasses: { quantity: 1, price: '$70', type: 'fragile' } },
  { cooker: { quantity: 4, price: '$900' } },
  { watch: { price: '$800', quantity: 1, type: 'fragile' } }
]
*/
//================================================================================
// Q2. Find all the items where quantity ordered is more than 1.

function quantityOrderMoreThan1(product) {
  const itemsWQutiGreTh1 = Object.keys(product[0]).reduce((acc, category) => {
    const item = product[0][category];
    // console.log(item);
    if (Array.isArray(item)) {
      item.map((subItem, index) => {
        // console.log(subItem);
        const subItemKey = Object.keys(subItem)[0];
        //  console.log(subItemKey);
        const subItemValue = subItem[subItemKey];
        // console.log(subItemValue); // that is Object.
        if (subItemValue.quantity && subItemValue.quantity > 1) {
          acc.push({ [subItemKey]: subItemValue });
        }
      });
    } else {
      if (item.quantity && item.quantity > 1) {
        acc.push({ [category]: item });
      }
    }

    return acc;
  }, []);
  return itemsWQutiGreTh1;
}

console.log(quantityOrderMoreThan1(product));

/*
[
  { shampoo: { price: '$50', quantity: 4 } },
  { HairOil: { price: '$40', quantity: 2, sealed: true } },
  { spoons: { quantity: 2, price: '$8' } },
  { cooker: { quantity: 4, price: '$900' } }
]
*/

//===========================================================================================
