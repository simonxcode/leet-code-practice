// https://leetcode.com/problems/valid-parentheses/

/*
  Breakdown:
    a. create hash table with parentheses combinations
    b. create stack variable and set to empty 
    c. iterate through input 
    d. if current char is an opening parentheses, add its equivalent closing parentheses to stack
    e. else if stack is not empty and last element matches current char, remove element from stack 
    f. else return false because input will contain an invalid parenthesis sequence
    g. when iteration is complete return true if stack length is empty    

  Complexity:
    Time: O(n), because 1 pass is required for each character within input
    Space: O(n), because memory is required for stack with size being potentially same as input
*/

var isValid = function(s) {
  const hash = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  const stack = []

  for(let char of s) {
    if(hash[char]) {
      stack.push(hash[char])
    } else if(stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.length === 0
}
                      
console.log(isValid('()[]{}')) //true
