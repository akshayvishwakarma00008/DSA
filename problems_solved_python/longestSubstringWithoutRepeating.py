# // Given a string s, find the length of the longest 
# // substring
# //  without repeating characters.



# // Example 1:

# // Input: s = "abcabcbb"
# // Output: 3
# // Explanation: The answer is "abc", with the length of 3.
# // Example 2:

# // Input: s = "bbbbb"  
# // Output: 1
# // Explanation: The answer is "b", with the length of 1.
# // Example 3:

# // Input: s = "pwwkew"
# // Output: 3
# // Explanation: The answer is "wke", with the length of 3.
# // Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


# // Constraints:

# // 0 <= s.length <= 5 * 104
# // s consists of English letters, digits, symbols and spaces.

def longest_sub_without_repeating(s):
    if s == "":
        return 0
     
    char_count = {}
    max_len = 0

    j=0
    for i in range(0,len(s)):
        if s[i] in char_count and char_count[s[i]] >= j:
            j = char_count[s[i]] +1 

        char_count[s[i]] = i
        max_len = max(max_len, i-j+1)

    return max_len

print(longest_sub_without_repeating("abcabcbb"))
print(longest_sub_without_repeating("pwwkew"))
print(longest_sub_without_repeating("bbbbbb"))
print(longest_sub_without_repeating("dvdf"))
print(longest_sub_without_repeating("ckilbkd"))


