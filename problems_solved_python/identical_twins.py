"""
For an array of integers nums, an identical twin is defined as pair (i, j) where nums[i] is equal to nums[j] and i < j.
Examples

Array: [1, 2, 3, 2, 1]
Number of Identical Twins: 2
Explanation:
Identical Twins: [[1, 1], [2, 2]]
Indexes: (0, 4), (1, 3)

Array: [1, 2, 2, 3, 2, 1]
Number of Identical Twins: 4
Explanation:
Identical Twins: [[1, 1], [2, 2], [2, 2], [2, 2]]
Indexes: (0, 5), (1, 2), (1, 4), (2, 4)

Array: [1, 1, 1, 1]
Number of Identical Twins: 6
Explanation:
Identical Twins: [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]
Indexes: (0, 1), (0, 2), (0, 3), (1, 2), (1, 3), (2, 3)

Given an array nums, find the number of identical twins.
"""

# def identical_twins(arr):
#     count = 0
#     for i in range(len(arr)):
#         for j in range(i+1, len(arr)):
#             if arr[i] == arr[j]:
#                 count += 1

#     return count


# arr = [1,2,2,3,2,1]
# res = identical_twins(arr)
# print("identical twins",res)


#optimised solution

from collections import defaultdict

def identical_twins(arr):
    count_map = defaultdict(int)
    count = 0

    for num in arr:
        count_map[num] += 1

    for val in count_map.values():
        if val > 1:
            count += (val * (val - 1)) // 2

    return count


arr = [1, 2, 2, 3, 2, 1]
res = identical_twins(arr)
print("Identical twins:", res)