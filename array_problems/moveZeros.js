// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

function moveZeros(nums){
    let i=0;
    let cnt =0;
    while(i<nums.length && cnt < nums.length){
        if(nums[i] === 0){
            let zero = nums.splice(i,1);
            nums.push(...zero);
            cnt++;;
        }else{
            i++;
            cnt++;
        }
    }
    return nums;
}

console.log(moveZeros([0,0,1]));