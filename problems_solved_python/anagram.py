# // Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

# // Example 1:

# // Input: s = "anagram", t = "nagaram"

# // Output: true

# // Example 2:

# // Input: s = "rat", t = "car"

# // Output: false

class anagramClass:
    def is_anagram(self,str1, str2):
        sorted_str1 = "".join(sorted(str1))
        sorted_str2 = "".join(sorted(str2))
        if sorted_str1 == sorted_str2:
            return True
        return False


obj1 = anagramClass()
print(obj1.is_anagram("hello", "lelho"))