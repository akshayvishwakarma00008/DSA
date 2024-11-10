str = "abcdddeeeefghhhij"

function countConsecutiveChar(str){
    let arr = []
    for(let i=0;i<str.length;i++){
        begin = i;
        count = 1;
        while (i + 1 < str.length && str[i] === str[i + 1]) {
            count++;
            i++;
        }
        if (count >=3){
           arr.push([begin,count])
        }
    }
    return arr
}

console.log(countConsecutiveChar(str))