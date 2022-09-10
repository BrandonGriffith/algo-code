from cgitb import reset
from typing import List


class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        result = []
        self.helper(nums, 0, result)
        return result

    def helper(self, nums, n, result):
        if (n == len(nums)):
            result.append(nums[:])
            return
        i = n
        while i < len(nums):
            [nums[i], nums[n]] = [nums[n], nums[i]]
            self.helper(nums, n + 1, result)
            [nums[i], nums[n]] = [nums[n], nums[i]]
            i = i+1


perm = Solution()
print(perm.permute([1, 2, 3]))
