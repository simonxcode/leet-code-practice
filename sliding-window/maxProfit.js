// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/*
Breakdown:
  a. set initial profit to 0 and buy price to value of index 0
  b. iterate through prices and initialize sell price to value of index 1
  c. if buy is less than sell determine higher value between profit and current sell - buy
  d. else set value of buy to current value of sell
  e. when iteration of prices is finish return profit 

Complexity:
  Time: O(n) because only 1 pass is required for input
  Space: O(1) because no extra memory is needed in addition to input  
*/

var maxProfit = function(prices) {
  let profit = 0
  let buy = prices[0]

  for(let i = 1; i <= prices.length; i++) {
    let sell = i 
    if(buy < prices[sell]) { 
      profit = Math.max(profit, prices[sell] - buy)
    } else {
      buy = prices[sell]
    }
  }
  
  return profit
}

console.log(maxProfit([7,1,5,3,6,4])) //5 
