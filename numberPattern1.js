//You are given a number n. You need to generate and print a pattern based on the given value of n.
//For each row, starting from the first, print numbers in descending order from n down to 1.
//Each number in a row is repeated as many times as the current row index (starting from n)

const pattern = (n) => {
  for (let row = n; row >= 1; row--) {
    let rowLine = "";
    for (let num = n; num >= 1; num--) {
      for (let numStr = 1; numStr <= row; numStr++) {
        rowLine = rowLine + " " + num;
      }
    }
    console.log(rowLine);
  }
};

pattern(4);
