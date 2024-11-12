// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:

// Input: s = "loveleetcode"

// Output: 2

// Example 3:

// Input: s = "aabb"

// Output: -1

 

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.


function firstUniqueChar(s){

    let obj = s.split("").reduce((acc,char)=>{
        if(acc.hasOwnProperty(char)){
            acc[char]++;
        }else{
            acc[char]=1;
        }

        return acc;

    },{})

    for(let key in obj){
        if(obj[key] === 1){
            return s.indexOf(key);
        }
    }

    return -1;

}

let s = "leetcode";
let s1 = "loveleetcode";
let s2 = "aabb";
console.log(firstUniqueChar(s2));