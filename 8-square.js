const { argv } = require("node:process");

if (isNaN(argv[2])) console.log("Missing size");
else {
  for (let i = 0; i < argv[2]; i++) {
    let result = "";
    for (let j = 0; j < argv[2]; j++) {
      result += "X";
    }
    console.log(result);
  }
}
