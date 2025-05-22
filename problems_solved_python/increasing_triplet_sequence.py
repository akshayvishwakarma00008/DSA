# 334. Increasing Triplet Subsequence
# Medium
# Topics
# Companies
# Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

# Example 1:

# Input: nums = [1,2,3,4,5]
# Output: true
# Explanation: Any triplet where i < j < k is valid.
# Example 2:

# Input: nums = [5,4,3,2,1]
# Output: false
# Explanation: No triplet exists.
# Example 3:

# Input: nums = [2,1,5,0,4,6]
# Output: true
# Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

import math
def incresing_triplet_sequence(arr):
    i, j = math.inf, math.inf

    for num in arr:
        if num <= i:
            i=num
        elif num <= j:
            j=num
        else:
            if num > i and num > j:
                return True
    
    return False

print(incresing_triplet_sequence([5,4,3,2,1]))
print(incresing_triplet_sequence([1,2,3,4,5]))
print(incresing_triplet_sequence([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]))

#desc
#here we are maintaing 2 variables and assiging initial value of infinity
# we are than comapring the num with i if the value of num is less than i we are updating its value
# if the i already has the lest value and it cant be assigned then we are doing the same thing with j 
# so in this process the i will always going to have the value lessthan j
# and if our control reaches else than it means we got the value which is i<j<k, hence it will retun true
# if it doent reach else then it will retuen false 