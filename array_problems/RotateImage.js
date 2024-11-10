// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// function rotate(a){
//     let n = a.length;
//     let b = Array.from({length:n},()=>Array(n).fill(0));
//     let k = 0;
//     for (let i=n-1 ;i>=0 ;i--){
//         for (let j=0 ;j<n ;j++){
//             b[j][k] = a[i][j];
//         }
//         k++;
//     }

//     return b;
// }


//Rotate array without second array
function rotate(matrix){
    let n = matrix.length;
    for (let i=0 ;i<n ;i++){
        for (let j=i+1 ;j<n ;j++){ //j+1 because we want to swap elements only once
            [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]]
        }
    }

    for (let i=0;i<n;i++){
        matrix[i].reverse();
    }

    return matrix;
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
let matrix1 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
console.log("rotataed array",rotate(matrix1));