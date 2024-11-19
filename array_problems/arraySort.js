
//sort in descending order
// let arr = [5,2,1,0]

// arr.sort((a,b) => b-a)

// console.log("array-srt = ",arr);

// //group user by their ids
// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];

//   function groupById(array) {
//     return array.reduce((obj, value) => {
//       obj[value.id] = value;
//       return obj;
//     }, {})
//   }
  
//   let usersById = groupById(users);
//   console.log("userById",usersById);


  //sort without using sort method
  let arr1 = [5,1,0,6];

  for (let i=0;i<arr1.length; i++){
    for (let j=i+1;j<arr1.length;j++){
      if(arr1[i] > arr1[j]){
        let temp =  arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = temp;
      }
    }
  }

 console.log("sorted array: ",arr1); 