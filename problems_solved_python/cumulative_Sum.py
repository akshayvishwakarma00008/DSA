"""
Q.The cumulative sum of an array at index i is defined as the sum of all elements of the array from index 0 to index i.
Examples

Initial Array: [1, 2, 3, 4]
Cumulative Sum: [1, 3, 6, 10]

Initial Array: [1, 1, 1, 1, 1]
Cumulative Sum: [1, 2, 3, 4, 5]

Initial Array: [1, 3, 5, 7, 9]
Cumulative Sum: [1, 4, 9, 16, 25]
"""

from typing import List

class Solution:
	def getCumulativeSum(self, arr: List[int]) -> List[int]:
		temp_arr = []
		temp_arr.append(arr[0])
		
		for i in range(1,len(arr)):
			val = temp_arr[i-1] + arr[i]
			temp_arr.append(val)
			
		return temp_arr
	
sol = Solution()
arr = [1,1,1,1,1]
res = sol.getCumulativeSum(arr)
print("cummulative array is",res)