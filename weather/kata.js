// You are provided with an array, and your task is to determine whether the array is sorted in ascending order or if it has been rotated by one from a sorted state.

// const sortedRotatedArray1 = [ 4, 5, 1, 2 ,3];   // Rotated sorted array
// const sortedRotatedArray2 = [1, 2, 3, 4, 5];   // Completely sorted array
// const unsortedRotatedArray = [4, 5, 1, 2, 7];  // Rotated unsorted array

// console.log(isRotatedSorted(sortedRotatedArray1));  // Output: true
// console.log(isRotatedSorted(sortedRotatedArray2));  // Output: true
// console.log(isRotatedSorted(unsortedRotatedArray)); // Output: false



function isRotatedSorted(array) {
    let arr = array;
    let flag = false;

    for (let i = 0; i < arr.length - 1; i++) {
     if (arr[i] < arr[i+1]) {
        flag = true;
        
        }
     else if(arr[i] > arr[arr.length-1]) {
        flag = true;
         }
    else{
        console.log(arr[i]);
            flag = false;
            console.log(flag);
    }
    }
    

}


// const sortedRotatedArray1 = [3, 4, 5, 1, 2];   // Rotated sorted array
// const sortedRotatedArray2 = [1, 2, 3, 4, 5];   // Completely sorted array
const unsortedRotatedArray = [4, 5, 1, 2, 7];  // Rotated unsorted array
// isRotatedSorted(sortedRotatedArray1);
// isRotatedSorted(sortedRotatedArray2);
isRotatedSorted(unsortedRotatedArray);