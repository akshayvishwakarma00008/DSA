// Given a string s, find the length of the longest 
// substring
//  without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

function longestSubstring(str) {
    let charSet = new Set();
    let left = 0;
    let maxLength = 0;
    
    for(let right = 0; right < str.length; right++) {
        const char =  str[right];

        while(charSet.has(char)) {
            charSet.delete(str[left]);
            left++;
        }

        charSet.add(char);

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(longestSubstring("pwwkew"));
console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("bbbb"));
console.log(longestSubstring("cdd"));
console.log(longestSubstring("ckilbkd"));