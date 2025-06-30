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
