let getargs = require("../modules/getargs/index.js")

let input = getargs.getIntegerArg()
// test that input is a number
if (isNaN(input) || !Number.isInteger(input)) {
  console.log("usage: node 1-odd-even/index.js <integer>")
} else {
  // test if integer is divisible by 2
  if (input % 2 === 0) {
    console.log(`${input} is even`)
  } else {
    console.log(`${input} is odd`)
  }
}
// exit the program
process.exit()