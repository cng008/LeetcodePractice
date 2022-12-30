/**
 * @param {number[][]} intervals
 * @return {number}
 * Time: O(n log n) -> logN to sort, n to iterate
 * Space: O(1) -> constant memory to hold count
 */
const eraseOverlapIntervals = (intervals) => {
    if (intervals.length < 2) return 0; // edge case
    
    intervals.sort((a, z) => a[0] - z[0]); // ascending
    
    let removeCount = 0, // keep track of the number of intervals that need to be removed
        prevEnd = intervals[0][1]; // keep track of the end time of previous interval
    
    for (let [start, end] of intervals.splice(1)) { // start comparing from second interval
        if (start >= prevEnd) { // no overlap
            prevEnd = end; // update prevEnd to be the end time of the current interval
        } else { // overlap
            prevEnd = Math.min(prevEnd, end); // "delete" interval w/ larget end value
            removeCount++;
        }
    }
    return removeCount;
};