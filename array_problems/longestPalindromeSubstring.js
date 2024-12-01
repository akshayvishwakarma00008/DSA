// Given a string s, return the longest 
// palindromic

// substring
//  in s.



// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"


// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

function longestpalendromeSubString(s) {

    //expanding from center technique

    if (s.length <= 2 && s[0] !== s[1]) {
        return s[0];
    }

    let longest = ""; 
    let n = s.length;

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < n && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    };

    for (let i = 0; i < n; i++) {
        let oddPalindrome = expandAroundCenter(i, i);

        let evenPalindrome = expandAroundCenter(i, i + 1);

        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }

    return longest;
}

console.log(longestpalendromeSubString("bcfabaged"));
console.log(longestpalendromeSubString("cbbd"));
console.log(longestpalendromeSubString("racecarx"));
console.log(longestpalendromeSubString("babad"));
console.log(longestpalendromeSubString("ac"));
console.log(longestpalendromeSubString("abb"));