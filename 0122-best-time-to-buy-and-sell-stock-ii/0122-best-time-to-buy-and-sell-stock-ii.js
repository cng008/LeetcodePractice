/**
 * @param {number[]} prices
 * @return {number}
 * Time: O(n) -> iterate entire array
 * Space: O(1)
 */
const maxProfit = (prices) => {
    let profit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        let prev = prices[i - 1];
        let current = prices[i];
        
        if (current > prev) {
            profit += current - prev
        }
    }
    return profit;
};