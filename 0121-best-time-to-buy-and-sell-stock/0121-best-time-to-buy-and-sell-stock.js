/**
 * @param {number[]} prices
 * @return {number}
Time: O(n) -> n is the number of nums in the array
Space: O(1) -> constant space
input: arr of int (unsorted, positive ints)
output: int
 */
const maxProfit = (prices) => {
    let profit = 0,
    windowStart = 0;

    for (let windowEnd = 0; windowEnd < prices.length; windowEnd++) {
        while (prices[windowEnd] < prices[windowStart]) { // profit can't be negative
            windowStart++
        }
        const currProfit = prices[windowEnd] - prices[windowStart]
        profit = Math.max(profit, currProfit)
     }
    return profit
};

// BRUTE FORCE O(N^2)
// nested for loop