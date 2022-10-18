/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let max_profit = 0, 
        windowStart = 0, // buy
        windowEnd = 1; // sell
    
    while (windowEnd < prices.length) {
        if (prices[windowStart] < prices[windowEnd]){
            let profit = prices[windowEnd] - prices[windowStart]
            max_profit = Math.max(max_profit, profit)
        } else { // if num at windowEnd is less than num at windowStart
            windowStart = windowEnd
        }
        windowEnd++
    }
    
    return max_profit
};