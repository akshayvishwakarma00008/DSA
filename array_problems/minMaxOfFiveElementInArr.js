// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// ex - [1,3,5,7,9]
// op - min 16, max 24

function findMinMax(arr){
    arr.sort((a,b)=>a-b);
    let min = arr.slice(0,arr.length-1).reduce((acc,val)=>{
        return acc + val
    },0)

    let max = arr.slice(1,arr.length).reduce((acc,val)=>{
        return acc + val
    },0)

    console.log(min, max);
}

findMinMax([1,3,5,7,9]);