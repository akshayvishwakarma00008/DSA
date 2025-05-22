# 125. Valid Palindrome
# Solved
# Easy
# Topics
# Companies
# A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

# Given a string s, return true if it is a palindrome, or false otherwise.

 

# Example 1:

# Input: s = "A man, a plan, a canal: Panama"
# Output: true
# Explanation: "amanaplanacanalpanama" is a palindrome.
# Example 2:

# Input: s = "race a car"
# Output: false
# Explanation: "raceacar" is not a palindrome.
# Example 3:

# Input: s = " "
# Output: true
# Explanation: s is an empty string "" after removing non-alphanumeric characters.
# Since an empty string reads the same forward and backward, it is a palindrome.

def sanitiseString(str):
    sanitised_string =""
    for ch in str:
        if (ch >= 'a' and ch <= 'z')  or (ch >= 'A' and ch <= 'Z'):
            sanitised_string += ch
        elif ch.isdigit():
            sanitised_string += ch

    return sanitised_string.lower()
              


def valid_palindrome(str):
    sanitised_string = sanitiseString(str)
    if len(sanitised_string) == 0 :
        return True
    
    reversed_string = list(sanitised_string)[::-1]
    print("reversed string - ", sanitised_string)
    if ''.join(reversed_string) == sanitised_string:
        return True
    
    return False

print(valid_palindrome("Abc"))
print(valid_palindrome("A man, a plan, a canal: Panama"))