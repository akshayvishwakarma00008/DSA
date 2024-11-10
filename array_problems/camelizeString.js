//Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

function camelize(str){
    const strArr = str.split('-');
    const camelizeStr = strArr.map((word,index)=>{
        return (index!== 0 ? word.charAt(0).toUpperCase()+word.slice(1):word);
    })

    return camelizeStr.join('')
}

console.log(camelize("my-short-string"));