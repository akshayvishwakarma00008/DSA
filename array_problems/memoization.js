function memoization(value){
    let cache = {}
    if (value in cache){
        return cache[value];
    }else{
        let result = value * 2;
        cache[value] = result;
        return result;
    }
}

console.log(memoization(20)); // 40
console.log(memoization(20)); // 40 cached
console.log(memoization(40)); // 80 updated result