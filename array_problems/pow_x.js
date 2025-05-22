// 50. Pow(x, n)
// Medium
// Topics
// Companies
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25


//unoptimised
var myPow = function(x, n) {
    let res = 1
    if(n > 0){
        for(let i=0; i<n; i++){
            res = res*x
        }
    }else{
        for ( let i=0; i<Math.abs(n);i++){
            res = res/x;
            
        }
    }
    return res;
};


//optimised solution
var myPow = function(x, n) {
    if (n === 0) return 1;

    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let res = 1;

    while (n > 0) {
        if (n % 2 === 1) {
            res *= x;
        }
        x *= x;
        n = Math.floor(n / 2);
    }

    return res;
};
