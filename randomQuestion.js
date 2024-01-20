function recu(index, arr, outArr) {
  if (index >= arr.length) return;
  if (Array.isArray(arr[index])) {
    recu(0, arr[index], outArr);
  } else {
    outArr.push(arr[index]);
  }
  recu(index + 1, arr, outArr);
}
function flattenArr(arr) {
  let outArr = [];
  recu(0, arr, outArr);
  return outArr;
}

const arr = [1, 2, [3, [4, 5]]];
// console.log(flattenArr(arr));
//-------------------------------------------------------------------

function sortingSentence(str) {
  let split_ = str.split(" ");
  let tempArr = [];
  for (let index = 0; index < split_.length; index++) {
    let currEle = split_[index];
    let digit = 0;
    let word = "";
    for (let j = 0; j < currEle.length; j++) {
      if (currEle[j] >= 1 && currEle[j] <= 9) {
        digit = currEle[j];
      } else {
        word += currEle[j];
      }
    }
    tempArr.push(digit, word);
  }
  // console.log(tempArr);
  let matrix = [];
  let k = 0;
  for (let i = 0; i < split_.length; i++) {
    matrix[i] = new Array(2);
  }
  //  console.log(matrix);

  for (let i = 0; i < split_.length; i++) {
    for (let j = 0; j < 2; j++) {
      matrix[i][j] = tempArr[k];
      k++;
    }
  }
  //  console.log(matrix);
  let objArr = [];
  for (let i = 0; i < matrix.length; i++) {
    objArr.push({ digit: matrix[i][0], word: matrix[i][1] });
  }
  //  console.log(objArr);
  objArr.sort((a, b) => {
    let first = Number(a.digit);
    let second = Number(b.digit);
    return first - second;
  });
  // console.log(objArr);

  let final = objArr.reduce((acc, curr, index) => {
    let res = curr.word;
    acc += res + " ";
    return acc;
  }, "");
  return final.trim();
}

let str = "is2 sentence4 This1 a3";
console.log(sortingSentence(str));
