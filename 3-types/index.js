const STRING_VALUE = "test_string"
const EMPTY_STRING_VALUE = ""
const INT_VALUE = 100
const INT_ZERO = 0
const FLOAT_VALUE = 100.00
const BOOL_TRUE = true
const BOOL_FALSE = false
const UNDEFINED = undefined
const NULL = null
const NAN = NaN

console.log("---- Use typeof operator ----")
console.log("STRING_VALUE ",STRING_VALUE, "->",typeof STRING_VALUE)
console.log("EMPTY_TRING_VALUE ",EMPTY_STRING_VALUE, "->",typeof EMPTY_STRING_VALUE)
console.log("INT_VALUE ",INT_VALUE, "->",typeof INT_VALUE)
console.log("INT_VALUE ",INT_ZERO, "->",typeof INT_ZERO)
console.log("INT_VALUE ",FLOAT_VALUE, "->",typeof FLOAT_VALUE)
console.log("INT_VALUE ",BOOL_TRUE, "->",typeof BOOL_TRUE)
console.log("INT_VALUE ",UNDEFINED, "->",typeof UNDEFINED)
console.log("INT_VALUE ",NULL, "->",typeof NULL)
console.log("INT_VALUE ",NAN, "->",typeof NAN)




console.log("---- Test add operator with strings ----")
// log string + string
console.log ("string + string ",STRING_VALUE+STRING_VALUE)
// log add string to int
console.log("string + int ",STRING_VALUE + INT_VALUE)
// log int + string
console.log("int + string ", INT_VALUE + STRING_VALUE)
// log int + int + string
console.log("int + int + string ", INT_VALUE + INT_VALUE + STRING_VALUE)
// log add string to float
console.log("string + float ",STRING_VALUE + FLOAT_VALUE)
// log add string to float with a toFixed(2)
console.log("string + float ",STRING_VALUE + FLOAT_VALUE.toFixed(2))
// log add string to true
console.log("string + true ", STRING_VALUE + BOOL_TRUE)
// log add string to false
console.log("string + false ", STRING_VALUE + BOOL_FALSE)
// log add string to undefined
console.log("string + undefined ", STRING_VALUE + UNDEFINED)
// log add string to null
console.log("string + null ", STRING_VALUE + NULL)

console.log("---- String concatenation ----")
let s1 = STRING_VALUE
let s2 = STRING_VALUE
let s3 = s1 + s2
s1 += s2
console.log(`s1 = ${s1}, s2 = ${s2}, s3=${s3}`)

// test truthy/falsy using == for string, empty string, null and undefined
// use ternary operator to determine if the value would be treated as true or false
console.log("---- Test truthy/falsy using ternary operator ----")
console.log("string -> ", STRING_VALUE ? true : false)
console.log("int ->", INT_VALUE ? true : false)
console.log("empty string -> ", EMPTY_STRING_VALUE ? true : false)
console.log("undefined ->", UNDEFINED ? true : false)
console.log("null ->", NULL ? true : false)
console.log("0 -> ", INT_ZERO ? true : false)
console.log("NaN ->  ", NAN ? true : false)




process.exit()