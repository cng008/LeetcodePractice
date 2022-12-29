/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * Time: O(n) -> only iterating through input once
 * Space: O(n) -> returning a list containing all merged intervals
 */
const insert = (intervals, newInterval) => {
    const res = []; // output array
    let i = 0;
    
    while (i < intervals.length) {
        if (newInterval[1] < intervals[i][0]) { // newInterval ends before start of current interval
            res.push(newInterval); // add newInterval to output array
            return [...res, ...intervals.slice(i)]; // return inserted interval + remaining intervals that didn't satisfy merge
        }
        else if (newInterval[0] > intervals[i][1]) { // newInterval starts after end of current interval
            res.push(intervals[i]); // add current interval to output array
            i++; // continue checking
        }
        else { // newInterval overlaps current interval, merge the intervals and update newInterval
            newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])];
            i++;
        }
    }
    res.push(newInterval); // add the new interval to output array
    return res;
};

// ALTERNATE SOLUTION
// const insert = (intervals, newInterval) => {
//     let merged = [], // output array
//         i = 0;
    
//     // add intervals that end before the start of the new interval
//     while (i < intervals.length && intervals[i][1] < newInterval[0]){
//         merged.push(intervals[i]);
//         i++;
//     }
    
//     // continue to merge all intervals as long as the end of the new interval is greater than the start of the current interval
//     while (i < intervals.length && intervals[i][0] <= newInterval[1]){
//         newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
//         newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
//         i++;
//     }
//     merged.push(newInterval); // insert once merge is complete
    
//     // add remaining intervals that didn't satisfy merge
//     while (i < intervals.length){
//         merged.push(intervals[i]);
//         i++;
//     }
    
//     return merged;
// };