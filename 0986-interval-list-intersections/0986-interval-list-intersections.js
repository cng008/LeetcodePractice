/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 * Time: O(n+m) -> iterate through both lists once
 * Space: O(1)
 */
const intervalIntersection = function(firstList, secondList) {
    let result = [],
        i = 0,
        j = 0;
    
    while (i < firstList.length && j < secondList.length) {
        // check if intervals overlap one another
        const firstOverlapsSecond = firstList[i][0] >= secondList[j][0] && firstList[i][0] <= secondList[j][1]; // boolean
        
        const secondOverlapsFirst = secondList[j][0] >= firstList[i][0] && secondList[j][0] <= firstList[i][1]; // boolean
        
        // save intersection to result array
        if (firstOverlapsSecond || secondOverlapsFirst){
            result.push([Math.max(firstList[i][0], secondList[j][0]), Math.min(firstList[i][1], secondList[j][1])]);
        }
        
        // increment the lower of the two ends
        if (firstList[i][1] < secondList[j][1]){
            i++;
        } else {
            j++;
        }
    }
    return result;
};