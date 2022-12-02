/**
 * @param {number[]} fruits
 * @return {number}
 * Time: O(n) -> number of elements in input array
 * Space: O(1) -> can only be a max of 3 types of fruit store in the map
 */
const totalFruit = (fruits) => {
    let windowStart = 0,
        maxLength = 0,
        freqMap = {};
    
    // loop through array
    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++){
        const rightFruit = fruits[windowEnd]
        // save to hash map
        if(!(rightFruit in freqMap)){
            freqMap[rightFruit] = 0
        }
        freqMap[rightFruit]++
        
        // shrink window when our hash map has more than 2 types of fruit
        while (Object.keys(freqMap).length > 2){
            const leftFruit = fruits[windowStart]
            freqMap[leftFruit]--
            if(freqMap[leftFruit] === 0){
                delete freqMap[leftFruit]
            }
            windowStart++
        }
        
        // save max length of window
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }
    
    return maxLength;
};

// BRUTE FORCE O(N^2)
// loop through fruits arr and add to newArr
// nested loop to check if el in fruits arr is different from newArr
// shift if true, push if false