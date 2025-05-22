// 169. Majority Element
// Solved
// Easy
// Topics
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?

var majorityElement = function(nums) {
    let newMap = nums.reduce((acc, val)=>{
        if(acc.hasOwnProperty(val)){
            acc[val] += 1;
        }else{
            acc[val] = 1;
        }

        return acc;
    }, {})

    let max = 0;
    let key;

    for(let k in newMap){
        if(newMap[k] > max){
            max = newMap[k];
            key = k
        }
    }

    return parseInt(key);
};


//using sorting  algorithm
var majorityElement = function(nums) {
    nums.sort((a,b) => a-b)
    return nums[Math.floor(nums.length/2)]
};