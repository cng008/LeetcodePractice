/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * Time: O(n) -> iterate through entire input array to insert into map
 * Space: O(k) -> map of k length
 */
const topKFrequent = (nums, k) => {
    const map = {}; // element: count
    
    for (let num of nums) {
        if (!map[num]) { // haven't seen number before
            map[num] = 0; // insert into map
        }
        map[num]++; // increment
    }
    
    // make buckets for length of input array
    const bucket = [];
    for (let i = 0; i < nums.length + 1; i++) {
        bucket.push([]);
    }
    
    // fill up buckets
    for (let key in map) {
        bucket[map[key]].push(key);
    }
    
    let res = [];
    for (let i = bucket.length - 1; i >= 0; i--) { // iterate backwards
        if (bucket[i].length > 0) { // not empty
            res = [...res, ...bucket[i]]; // get everything in res and in bucket
            if (res.length === k){
                return res;
            }
        }
    }
};