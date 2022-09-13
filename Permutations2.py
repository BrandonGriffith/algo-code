from typing import List


class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        result = []
        perm = []
        mapper = {}
        for n in nums:
            if n in mapper:
                mapper[n] += 1
            else:
                mapper[n] = 1

        def helper():
            if len(perm) == len(nums):
                result.append(perm[:])
                return
            for n in mapper:
                if mapper[n] > 0:
                    perm.append(n)
                    mapper[n] -= 1
                    helper()
                    mapper[n] += 1
                    perm.pop()
        helper()
        return result


perm = Solution()
print(perm.permuteUnique([1, 1, 2]))
