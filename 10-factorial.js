const { argv } = require("node:process");

function factorial(n) {
  let num = +n;
  if (isNaN(num)) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}

console.log(factorial(argv[2]));
