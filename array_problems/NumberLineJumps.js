// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location x1 and moves at a rate of v1  meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

// Sample Input 0
// 0 3 4 2

// Sample Output 0
// YES

// Explanation 0
// The two kangaroos jump through the following sequence of locations:
// From the image, it is clear that the kangaroos meet at the same location (number  on the number line) after same number of jumps ( jumps), and we print YES.

// function numberLineJumpls(x1, v1, x2, v2){
//     let n = (x1+x2) % (v1+v2)
//     for(let i=1 ;i<=n ;i++){
//         if(x1+i*v1 === x2+i*v2){
//             return "YES"
//         }
//     }
//     return "NO"
// }

// console.log(numberLineJumpls(0,2,5,3));

function numberLineJumps(x1, v1, x2, v2) {
    if (v1 !== v2) {
        const jumps = (x2 - x1) / (v1 - v2);
        if (jumps >= 0 && Number.isInteger(jumps)) {
            return "YES";
        }
    } else if (x1 === x2) {
        return "YES";
    }
    return "NO";
}

// Sample Test Cases
console.log(numberLineJumps(0, 3, 4, 2)); // Output: YES
console.log(numberLineJumps(0, 2, 5, 3)); // Output: NO
console.log(numberLineJumps(43, 2, 70, 2)); // Output: NO
