"""
The cumulative sum of an array at index i is defined as the sum of all elements of the array from index 0 to index i.
Examples

Initial Array: [1, -2, 3, 4, -6]
Cumulative Sum: [1, -1, 2, 6, 0]

Initial Array: [1, -1, -1, -1, 1]
Cumulative Sum: [1, 0, -1, -2, -1]

Initial Array: [1, 3, 5, 7]
Cumulative Sum: [1, 4, 9, 16]

The positive cumulative sum of an array is a list of only those cumulative sums which are positive.
"""

def positive_cumalative_sum(arr):
    temp_arr = []
    temp_arr.append(arr[0])
	
    for i in range(1,len(arr)):
          temp_arr.append(arr[i] + temp_arr[i-1])

    	
    return [temp_arr[i] for i in range(len(temp_arr)) if temp_arr[i] > 0]


arr = [1,-2,3,4,-6]

res = positive_cumalative_sum(arr)
print("positive cumulative arr",res)