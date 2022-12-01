/**
 * @param {number[]} prices
 * @return {number}
 * Time: O(n) -> n is the number of nums in the array
 * Space: O(1) -> constant space
 */
const maxProfit = (prices) => {
    let max_profit = 0, 
        windowStart = 0 // buy
    
    for (let windowEnd = 1; windowEnd < prices.length; windowEnd++) {
        if (prices[windowStart] < prices[windowEnd]){
            let profit = prices[windowEnd] - prices[windowStart]
            max_profit = Math.max(max_profit, profit)
        } else { // if num at windowEnd is less than num at windowStart
            windowStart = windowEnd
        }
    }
    
    return max_profit
};

// BRUTE FORCE O(N^2)
// nested for loop