# Time: O(n) -> iterate through entire input array to insert into map
# Space: O(k) -> map of k length
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        map = {}
        buckets = [[] for i in range(len(nums) + 1)] # make buckets for length of input array
        
        for n in nums:
            map[n] = 1 + map.get(n, 0) # add count to map
        for n, c in map.items():
            buckets[c].append(n) # n appears c number of times
            
        res = [] # output
        for i in range(len(buckets) - 1, 0, -1): # iterate backwards
            # get the top 'k' elements
            for n in buckets[i]:
                res.append(n)
                if len(res) == k:
                    return res