// https://leetcode.com/problems/reverse-linked-list/

/*
Breakdown:
  a. declare prev and set to null
  b. declare curr and assign to head(of initial list, this will be starting node of reverse list) 
  c. traverse through initial list as long as curr is not null
  d. declare temporary next and assign to next node(from initial list)
  e. arrive at next node(in reverse list)
  f. prev node(in reverse list) now becomes curr 
  g. curr(in reverse list) now becomes next node(from initial list) 
  h. when iteration is complete, return prev(head of reverse list) 

Visual:
         (head)              (tail)
initial: [1]->[2]->[3]->[4]->[5]->null

         (head)              (tail)
reverse: [5]->[4]->[3]->[2]->[1]->null

Complexity:
  Time: O(n) because we only need to traverse the list once 
  Space: O(1) because no extra memory is needed for pointers(prev, node) 

*/
var reverseList = function(head) {
  let prev = null
  let curr = head

  for (let i = 0; curr !== null; i++) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}

console.log(reverseList(head)) //[5,4,3,2,1]
