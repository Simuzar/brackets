module.exports = function check(str, bracketsConfig) {
  // your solution
let stack = [];
const objToCompare = {};

bracketsConfig.forEach(pair => {
  objToCompare[pair[1]] = pair[0];
});

let openingBrackets = new Set(bracketsConfig.map(pair => pair[0]));

for(let char of str) {
  if(openingBrackets.has(char)) {
    if(objToCompare[char] === char) {
      stack[stack.length - 1] ===  char ? stack.pop() : stack.push(char);
      } else {
        stack.push(char);
      }
    } else if (stack.length === 0 || stack[stack.length - 1] !==  objToCompare[char] ) {
      return false;
    } else {
      stack.pop();
    }
  } 
return stack.length === 0;
}



