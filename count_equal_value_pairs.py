"""
Count of equal value pairs from given two Arrays such that a[i] equals b[j]
Last Updated : 09 May, 2024
Given two arrays a[] and b[] of length N and M respectively, sorted in non-decreasing order. The task is to find the number of pairs (i, j) such that, a[i] equals b[j].

Examples:

Input: a[] = {1, 1, 3, 3, 3, 5, 8, 8}, b[] = {1, 3, 3, 4, 5, 5, 5}
Output: 11
Explanation: Following are the 11 pairs with given condition The 11 pairs are {{1, 1}, {1, 1}, {3, 3}, {3, 3}, {3, 3}, {3, 3}, {3, 3}, {3, 3}, {5, 5}, {5, 5}, {5, 5}} . 

Input: a[] = {1, 2, 3, 4}, b[] = {1, 1, 2}
Output: 3

"""

a = [1, 1, 3, 3, 3, 5, 8, 8]
b = [1, 3, 3, 4, 5, 5,5]

trace = {}

for index1 in range(len(a)):
    val  = a[index1]
    cnt = 1
    if val not in trace:
        for j in range(index1+1,len(a)):
            if a[j] == val:
                cnt += 1
    
        trace[val] = cnt


temp = []
for index2 in range(len(b)):
    val  = b[index2]
    cnt = 1
    print("val",val)
    if val in trace and val not in temp:
        for j in range(index2+1,len(b)):
            #print(j)
            if b[j] == val:
                cnt += 1
            
        trace[val] *= cnt
        temp.append(val)

key_to_remove = [key for key in trace if key not in temp]

for key in key_to_remove:
    trace.pop(key)

data_to_print = []
for val in trace:
    for n in range(trace[val]):
        data_to_print.append((val,val))

formatted_output = "{" + ", ".join(f"{{{x[0]}, {x[1]}}}" for x in data_to_print) + "}"
print("data_to_print",formatted_output)

    




