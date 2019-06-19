# WATS 3020 Skills 1
* Variables and Variable Declaration
* Data Types: Number, String, Boolean, Primitive values vs Objects
* String functions: indexOf
* Operators
* Logic and Logical Expressions, If Then Else
* Template Literal and console.log

### Variable Declaration
JavaScript has 4 ways to declare a variables: `var`, `const`, `let`, just use the name:
```
var a = 10
const a = 10
let a = 10
a=10
```
The syntax for `const` and `let` are part of the ES6 syntax and can be used in node or in browser and are preferred.  Using `var` and no syntax for declaration have similar effect and make the variable global in it's function space, or lexically scoped.  This is more confusing for programmers and is generally avoided although you'll still see it used a lot.  A variable declared with `const` can not be set to another value, although, when we were with object, you'll see that properties within a **const** object can be reset.  A variable declared with `let` can be reset and is block scoped.  Block scoping means the variable is only know within the block (pair of curly braces or page if not within curly braces) in which it is declared.

### Variable Types
JavaScript is a [loosely typed language](https://en.wikipedia.org/wiki/Strong_and_weak_typing), but it recognizes the types referenced in its variables.  There is a `typeof` operator that can return the type of a variable; for example
```
let n = 3
typeof n
```
The code above will return "number".  

### String methods
We're not writing functions and objects in this assignment, but we're using them in the form of object methods. There are many [string functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).  In this assignment you'll use the `indexOf` function to determine if a string contains a substring. This function is called as follows:
```
let s = "string"
s.indexOf("s")
```
The call to indexOf above would return the value `0` because the letter `s` is found in the 0th position.  Counting starts at 0.  

```
let s = "string"
s.indexOf("Q")
```
The call to indexOf above would return the value `-1` because that it what the function returns when the value can't be found.  That means a good logical test for the existence of a character in a string is `s.indexOf("Q") > -1`.

### Number methods
Like strings, numbers have [methods](https://www.w3schools.com/js/js_number_methods.asp). The `toFixed()` method helps us to provide decimal places to a number with decimals.  When you use division `\`, even on integers, you can get decimals places.  Notice, in the example below that toFixed returns a string and will apply rounding rules.
```
let n = 1
n/6 //returns 0.16666666666666666
(n/6).toFixed(2) //returns "0.17"

```

### Operators
Operators are functions that have a symbolic shorthand; for example instead of saying "add" we have a plus sign "+" operator.  
Every type has a [set of operators](https://www.w3schools.com/jsref/jsref_operators.asp) that can be applied to a variable of that type.

### Logic
In an imperative language, like JavaScript, the flow of the instructions is often linear in nature. In other words, when one command is complete, the next line of code is executed.  Sometimes we want to change the flow of the code based on the status of certain variables.  Variable contain the data, or state, of the program.  We are often writing data driven applications.  One of the ways to change the flow of the program is to use logic.  We can create logical expressions by using logical operators.  

Whereas variables with a boolean type will always return true or false, we can create expressions which return true or false using logical operators.  We can also use AND `&&` and OR `||` to combine logical expression, thereby creating more complex logical tests.  Program flow is often described visually using flowcharts like this flowchart that looks at the value of temperature ![flowchart that looks at the value of temperature](https://www.edrawsoft.com/flowchart/images/flowchart-simple-sample.png).

### Template Literals
You'll learn that you can concatenate strings with other string and numbers to create new strings.  However, with ES6, we have **literal templates** to create string composed of literals and variables.  The syntax uses a pair backtick characters **`** (key to the left of the 1 on most keyboards) to enclose a set of strings and variables.  Variables are enclosed in **${}** within the backticks to show the value of the variable.
```
let s = "Hello"
let name = "Sally"
`${s} ${name}, how are you today?` // returns "Hello Sally, how are you today?
```
The ability to combine literals and variables can be use to create new strings or to log data using the console.log() function.  We call the placing of string within the template literal "interpolation".  A template literal may span multiple lines of text.

## Project Resources

It might be helpful to review some additional resources as you work through
this project:

* [JavaScript Variable Declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations)
* [JavaScript Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
* [If then else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
* [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
* [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
* [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

## Basic Requirements

In order to successfully complete this exercise, you must find and complete the **TODOs** in the code:

* 

## Stretch Goals

If you want to push this project further, you can try some of the following:

* 
