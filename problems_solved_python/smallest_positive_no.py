# 41. First Missing Positive
# Hard
# Topics
# premium lock icon
# Companies
# Hint
# Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

# You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

 

# Example 1:

# Input: nums = [1,2,0]
# Output: 3
# Explanation: The numbers in the range [1,2] are all in the array.
# Example 2:

# Input: nums = [3,4,-1,1]
# Output: 2
# Explanation: 1 is in the array but 2 is missing.
# Example 3:

# Input: nums = [7,8,9,11,12]
# Output: 1
# Explanation: The smallest positive integer 1 is missing.
 

# Constraints:

# 1 <= nums.length <= 105
# -231 <= nums[i] <= 231 - 1

def missing_first_positive(arr):
    # print(len(arr))
    positive_set = set(x for x in arr if x > 0)

    for i in range(1, len(arr) + 2):
        if i not in positive_set: #looping in set is O(1) and looping in list is O(N^2)[IF I IN LIST]
            return i


    return len(arr)


missing_number = missing_first_positive([-1,0,-5,2,4])
print(missing_number)
missing_number = missing_first_positive([3,4,-1,1])
print(missing_number)
missing_number = missing_first_positive([7,8,9,11,12])
print(missing_number)
missing_number = missing_first_positive([1])
print(missing_number)
missing_number = missing_first_positive([1,2,0])
print(missing_number)