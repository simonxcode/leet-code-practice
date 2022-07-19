// https://leetcode.com/problems/group-anagrams/

/*
Breakdown: 
  a. create hash table for storing matching anagram into groups
  b. iterate through array and sort each element in alphabetical order
  c. if sorted element does not exist in hash assign current element(as an array) to sorted element
  e. if sorted element already exist push current element into array property

Complexity:
  Time: O(nk log k), because sort() takes k log k times and we have to perform this operation on every element
  Space: O(n) because only one pass is required
  */

var groupAnagram = function(strs) {
  const hash = {}

  for(const ele of strs) {
    const sortedEle = ele.split('').sort().join('')

    if(!hash[sortedEle]) {
      hash[sortedEle] = [ele]
    } else {
      hash[sortedEle].push(ele)
    }
  }

  return Object.values(hash)
}

console.log(groupAnagram(['eat','tea','tan','ate','nat','bat'])) //[['bat'],['nat','tan'],['ate','eat','tea']]
