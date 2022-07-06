//https://leetcode.com/problems/ransom-note/

/*
Breakdown:
  a. iterate through magazine and store count of all strings in hash map
  b. iterate through ransomNote and determine if each string can be accounted for in hash map
  c. if no, return false
  d. if yes, subtract 1 from string value
  e. upon exiting ransomNote iteration return true

Complexity:
  Time: O(n) because only 1 pass is required for randomNote and magazine
  Space: O(n) because memory is required for hash map 
*/

var canConstruct = function(ransomNote, magazine) {
  const hash = {}

  for(const char of magazine) {
    if(!hash[char]) {
      hash[char] = 1
    } else {
      hash[char] += 1
    }
  }

  for(const char of ransomNote) {
    if(!hash[char]) {
      return false
    } else {
      hash[char] -= 1
    }
  }

  return true
}

console.log(canConstruct('car', 'carriage')) //true
