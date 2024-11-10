function cycle(...values){
    let state = 0;

    return function(){
        const value = values[state];
        state = (state +1 ) % values.length;
        return value;
    }
}

const hellofn  = cycle("hello", "world")
console.log(hellofn());
console.log(hellofn());