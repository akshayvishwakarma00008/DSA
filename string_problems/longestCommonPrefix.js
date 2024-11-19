function longestPrefix(strs) {

    let smallestString = strs[0];
    for (let i = 1; i < strs.length; i++) {
        
        while(strs[i].indexOf(smallestString) !== 0){
            smallestString = smallestString.slice(0,-1);

            if(!smallestString){
                return "";
            }
        }
    }

    return smallestString;
}

console.log(longestPrefix(["flower","flow","flight"]))