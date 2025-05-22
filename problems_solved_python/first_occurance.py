# // Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

# // Example 1:

# // Input: haystack = "sadbutsad", needle = "sad"
# // Output: 0
# // Explanation: "sad" occurs at index 0 and 6.
# // The first occurrence is at index 0, so we return 0.
# // Example 2:

# // Input: haystack = "leetcode", needle = "leeto"
# // Output: -1
# // Explanation: "leeto" did not occur in "leetcode", so we return -1.

def first_occurance(haystack, needle):
    if needle in haystack:
        index = haystack.find(needle) # here find return the first index of it matches the string inside variable needle
        return index
    
    return -1

print(first_occurance("sadbutsad", "sad"))
print(first_occurance("leetcode", "leeto"))