// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

function printTriangle(n) {
  let lastPat = 1;
  for (let row = 1; row <= n; row++) {
    let rowLine = "";
    let pat = lastPat;
    for (let col = 1; col <= row; col++) {
      rowLine = rowLine + (rowLine === "" ? "" : " ") + pat;
      pat = pat === 1 ? 0 : 1;
    }
    lastPat = lastPat === 1 ? 0 : 1;
    console.log(rowLine);
  }
}

printTriangle(5);
