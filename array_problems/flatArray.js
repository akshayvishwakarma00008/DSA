function flatten_array(arr){
    let flat_array = arr.reduce((flat,item)=>{
        if(Array.isArray(item)){
            return flat.concat(flatten_array(item))
        }else{
            return flat.concat(item)
        }
    },[])

    return flat_array
}

console.log(flatten_array([1,[3,5,[7,8,[0,2]]]]));