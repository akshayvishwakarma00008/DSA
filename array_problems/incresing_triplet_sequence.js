// # 334. Increasing Triplet Subsequence
// # Medium
// # Topics
// # Companies
// # Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

// # Example 1:

// # Input: nums = [1,2,3,4,5]
// # Output: true
// # Explanation: Any triplet where i < j < k is valid.
// # Example 2:

// # Input: nums = [5,4,3,2,1]
// # Output: false
// # Explanation: No triplet exists.
// # Example 3:

// # Input: nums = [2,1,5,0,4,6]
// # Output: true
// # Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

function incTripletSeq(arr){
    let first = Infinity;
    let second = Infinity;

    for(i=0;i<arr.length;i++){
        if(arr[i] <= first ){
            first = arr[i];
        }else if(arr[i] <= second){
            second = arr[i];
        }else{
            return true;
        }
    }

    return false;
}

console.log(incTripletSeq([5,4,3,2,1]))
console.log(incTripletSeq([1,2,3,4,5]))
console.log(incTripletSeq([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]))

// #here we are maintaing 2 variables and assiging initial value of infinity
// # we are than comapring the num with first if the value of num is less than first we are updating its value
// # if the first already has the lest value and it cant be assigned then we are doing the same thing with second 
// # so in this process the first will always going to have the value lessthan second
// # and if our control reaches else than it means we got the value which is first<second<k, hence it will retun true
// # if it doent reach else then it will retuen false 