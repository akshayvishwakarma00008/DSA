// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21


let reverse =  function reverseInteger(x){
    let str = x.toString().split("")
    if(x < 0){
        str = str.slice(1)
    }
    let rev = Number(str.reverse().join(""));
    rev = x < 0 ? -rev: rev;

    if (rev < -2147483648 || rev > 2147483647) {
        return 0;
    }

    return rev;
}

let  x = -123;

console.log("reversed integer",reverse(x));
