// const exports = module.exports = {};
exports.getIntegerArg = function() {
  let arg = process.argv.slice(2)
    if (arg.length > 0){
      return parseInt(arg[0])
    }
    return NaN
  };
  
  exports.getStringArg = function(){
     let arg = process.argv.slice(2)
    if (arg.length > 0){
      return arg[0]
    }
    return null
  }
  
  exports.print = function(msg){
    process.stdout.write(`${msg}`);
  }
  
  exports.terminal = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })