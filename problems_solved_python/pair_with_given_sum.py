"""
Given an array A[] of n numbers and another number x, the task is to check whether or not there exist two elements in A[] whose sum is exactly x. 

Examples: 

Input: arr[] = {0, -1, 2, -3, 1}, x= -2
Output: Yes
Explanation: If we calculate the sum of the output,1 + (-3) = -2

Input: arr[] = {1, -2, 1, 0, 5}, x = 0
Output: No

"""

arr = [0,-1,2,-3,1]
x = 4
flag = False

for index in range(len(arr)):
    for index2 in range(index+1,len(arr)):
        if arr[index] + arr[index2] == x :
            flag = True
            break;

if flag:
    print("YES")
else:
    print("NO")
