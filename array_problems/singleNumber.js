// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// function singleNumber(arr){
//     let obj = {};

//     nums.forEach(element => {
//         if(obj.hasOwnProperty(element)){
//             obj[element] += 1;
//         }
//         else{
//             obj[element] = 1;
//         }
//     });

//     for(let key in obj){
//         if(obj[key] == 1){
//             return key;
//         }
//     }

// }

function singleNumber(arr){
    let result = 0;
    let obj = arr.reduce((acc,val)=>{
        if(acc.hasOwnProperty(val)){
            acc[val] += 1
        }else{
            acc[val] = 1
        }
        return acc;
    },{})

    for (let key in obj){
        if(obj[key] === 1){
            return +key;
        }
    }
}

console.log(singleNumber([4,1,2,1,2]));