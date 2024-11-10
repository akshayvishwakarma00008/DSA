// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.



// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// Input: num1 = [1,2], num2=[1,1]
// output: [1,1]

function intersection(nums1, nums2) {
    let common = [];

    let obj1 = nums1.reduce((acc,value)=>{
        if(acc.hasOwnProperty(value)){
            acc[value]++;
        }else{
            acc[value]=1;
        }
        return acc;
    },{})

    let obj2 = nums2.reduce((acc,value)=>{
        if(acc.hasOwnProperty(value)){
            acc[value]++;
        }else{
            acc[value]=1;
        }
        return acc;
    },{})

    for (let key in obj1){
        if(obj2.hasOwnProperty(key)){
            let min = Math.min(obj1[key],obj2[key]);
            for (let i = 0; i < min; i++) {
                common.push(+key);
            }
        }
    }

    return common;
}

console.log(intersection([1,1], [1,2]));