// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false


function anagram(s, t){
    let word1 = s.split("").reduce((acc,char)=>{
        if(acc.hasOwnProperty(char)){
            acc[char]++;
        }else{
            acc[char] = 1;
        }

        return acc;
    },{})

    let word2 = t.split("").reduce((acc,char)=>{
        if(acc.hasOwnProperty(char)){
            acc[char]++;
        }else{
            acc[char] = 1;
        }

        return acc;
    },{})

    let word = s.length > t.length ? word1 :word2 ; 
    for (let key in word){
        if(word2.hasOwnProperty(key)){
            if(word1[key] === word2[key]){
                continue;
            }
        }

        return false
    }

    return true;
}

// console.log(anagram( "anagram",t = "nagaram"))
console.log(anagram( "rat",t = "tar"))