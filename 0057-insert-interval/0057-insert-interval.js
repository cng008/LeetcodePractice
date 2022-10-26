/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * Time: O(n) -> only iterating through input once
 * Space: O(n) -> returning a list containing all merged intervals
 */
const insert = (intervals, newInterval) => {
    let merged = [], // result array
        i = 0;
    
    // add intervals that end before the start of the new interval
    while (i < intervals.length && intervals[i][1] < newInterval[0]){
        merged.push(intervals[i]);
        i++;
    }
    
    // continue to merge all intervals as long as the end of the new interval is greater than the start of the current interval
    while (i < intervals.length && intervals[i][0] <= newInterval[1]){
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    merged.push(newInterval); // insert once merge is complete
    
    // add remaining intervals that didn't satisfy merge
    while (i < intervals.length){
        merged.push(intervals[i]);
        i++;
    }
    
    return merged;
};