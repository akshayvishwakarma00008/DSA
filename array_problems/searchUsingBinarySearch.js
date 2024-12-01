//binary search
count = 0;
function binarySearch(arr, number, left, right) {
    console.log(count++);
    if (left > right) {
        return false;
    }

    let mid = Math.floor((left + right) / 2)

    if (arr[mid] === number) {
        return true;
    } else if (number < arr[mid]) {
        return binarySearch(arr, number, left, mid - 1);
    }
    else {
        return binarySearch(arr, number, mid + 1, right);
    }
}

let arr = [1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
left = 0;
right = arr.length - 1;

if (binarySearch(arr, 44, left, right)) {
    console.log("Number found");
} else {
    console.log("Number not found");
}