/**
 * @param {number[]} arr
 * @return {number}
 * Time: O(log n) -> reduces the search range by half at every step
 * Space: O(1) -> constant space
 */
const peakIndexInMountainArray = (arr) => {
    let start = 0,
        end = arr.length - 1;
    
    while (start < end){ // stops when 'start === end'
        let mid = Math.floor((start + end ) / 2);
        if (arr[mid] > arr[mid + 1]){ // descending/second part of arr
            end = mid;
        } else { // arr[mid] < arr[mid + 1]) ascending/first part of arr
            start = mid + 1;
        }
    }
    return start; // end of while loop 'start === end'
};