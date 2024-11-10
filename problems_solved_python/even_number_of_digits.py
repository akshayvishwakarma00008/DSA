"""
Given an array of integers, find the elements which have an even number of digits.

Example
Array: [42, 564, 5775, 34, 123, 454, 1, 5, 45, 3556, 23442]
Answer: 42, 5775, 34, 45, 3556
The order of the returned elements should be the same as the order of the initial array.
"""


def even_number_of_digits(arr):
    return [num for num in arr if len(str(num)) % 2 == 0]
    
arr = [42, 564, 5775, 34, 123, 454, 1, 5, 45, 3556, 23442]
arr1 = [11,4,200]
print("even_no_of_digits",even_number_of_digits(arr1))