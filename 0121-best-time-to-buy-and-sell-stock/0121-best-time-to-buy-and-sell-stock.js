/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let max_profit = 0, 
        windowStart = 0, // buy
        windowEnd = 1; // sell
    
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