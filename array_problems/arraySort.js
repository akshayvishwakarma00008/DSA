
//sort in descending order
arr = [5,2,1,0]

arr.sort((a,b) => b-a)

console.log("array-srt = ",arr);

//group user by their ids
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }
  
  let usersById = groupById(users);
  console.log("userById",usersById);