// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

function sanitizeString(s) {
    let res = "";
    for (let i = 0; i < s.length; i++) {
        if ((s[i] >= 'a' && s[i] <= 'z') ||
            (s[i] >= 'A' && s[i] <= 'Z') ||
            (s[i] >= '0' && s[i] <= '9')) {
            {
                res = res + s[i];
            }
        }
    }

    return res.toLocaleLowerCase();
}



function isPalindrome(s) {
    let str = sanitizeString(s);
    console.log("str: ",str);
    if(str === ""){
        return true;
    }

    let revlen = str.length-1;
    console.log("revlen: ",revlen);
    console.log('ath.floor((str.length - 1)/2: ', Math.floor(9/2))
    for (let i=0;i<Math.floor((str.length)/2);i++) {
        console.log("str[i]: ",str[i]);
        console.log("str[revlen]: ",str[revlen]);
        if(str[i] !== str[revlen--]){
            return false;
        }
    }
    return true;
}

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
