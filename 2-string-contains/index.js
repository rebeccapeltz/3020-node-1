let getargs = require("../modules/getargs/index.js")

let input = getargs.getStringArg()

if (!input) {
  console.log("usage: node 2-string-contains/index.js <string>")
  console.log("if string contains a space, put it in quotes")
} 

// check to see if string contains hello
// if it does report back the position in the string where it begins

else {
  if (input.indexOf("hello") > -1){
    console.log(`input contains hello at location ${input.indexOf("hello")}`)
  } else [
    console.log(`input does not contain the string "hello"`)
  ]
}
process.exit()