function validbrackets(str){
    let stack = [];
    let brackets ={
        "(":")",
        "{":"}",
        "[":"]"
    };

    for(i=0;i<str.length;i++){
        if(str[i]=== "(" ||
            str[i] === "{" ||
            str[i] === "["
        ){
            stack.push(str[i]);
        }else{
            if(str[i] !== brackets[stack.pop()]){
                return "invalid"
            }
        }
    }

    return stack.length === 0 ? "valid" : "invalid"
}

console.log(validbrackets("()"));         // Output: valid
console.log(validbrackets("()[]{}"));     // Output: valid
console.log(validbrackets("(]"));         // Output: invalid
console.log(validbrackets("({})"));         // Output: valid