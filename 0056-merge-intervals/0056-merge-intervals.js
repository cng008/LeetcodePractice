/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * Time: O(n*log n) -> logN to sort, n to iterate
 * Space: O(n) -> for sorting (Timsort) & for returning a list containing all merged intervals
 */
const merge = (intervals) => {
    // base case for only 1 interval
    if (intervals.length < 2) return intervals;
    
    // sort intervals by start time to ensure a.start <= b.start
    intervals.sort((a, z)=> a[0] - z[0]);
    
    // start checking at first interval in arr
    const mergedIntervals = [intervals[0]]; // result array    
    for (let next of intervals){
        let recentInterval = mergedIntervals[mergedIntervals.length-1]
        // if 'a' overlaps 'b' (b.start <= a.end), merge into new interval 'c'
        if (next[0] <= recentInterval[1]){ // start of next interval is less than the current end
            recentInterval[1] = Math.max(recentInterval[1], next[1]);
        } else {
            // push to arr if interval is not overlapping
            mergedIntervals.push(next);
        }
    }
    return mergedIntervals;
};