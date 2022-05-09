// https://leetcode.com/problems/valid-anagram/

/*
Breakdown:
  a. if length of s and t are not equal return false
  b. create variable for hash table
  c. iterate through s and get count of each string and store in hash table
  d. iterate through t and determine if each string exist in hash table
  e. if true, subtract 1 from string value in hash table
  f. if false, return false
  g. when iteration of t is complete return true 

Complexity:
  Time: O(n) because only 1 pass is required for s and t
  Space: O(n) because memory is needed for hash map 
*/

var isAnagram = function(s, t) {
  if(s.length !== t.length) return false
 
  const hash = {}

  for(const char of s) {
    hash[char] ? hash[char]++ : hash[char] = 1
  }

  for(const char of t) {
    if(hash[char]) hash[char]-- 
    else return false
  }

  return true

}

console.log(isAnagram('racecar', 'carearc')) //true
