/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 * Time: O(log n) -> reduces the search range by half at every step
 * Space: O(1) -> constant space
 */
const nextGreatestLetter = (letters, target) => {
    let start = 0,
        end = letters.length - 1;
    
    while (start <= end){
        const mid = Math.floor((start + end) / 2);
        if (target >= letters[mid]){
            start = mid + 1
        } else { // target < letters[mid]
            end = mid - 1
        }
    }
    // since the loop is running until 'start <= end' at the end of the while loop, 'start === end + 1'
    return letters[start % letters.length];
};