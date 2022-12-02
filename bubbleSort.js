// What is bubble sort?
// bubble sort is a sorting algorithm in which the unsorted array is sorted by getting the largest element to the end of an array
// and so on until the array is sorted.
// one optimization we can do is if our array is sorted in step 0 itself we can give a condition that if the element is not swaped just return the 
// sorted array.


function bubbleSort(arr){
    let i,j;
    let isSwapped = false;
    for(i=0;i<arr.length;i++){
        isSwapped = false;
        for(j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
            let temp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = temp;
            isSwapped = true;
        }
    }
    if(!isSwapped){
        break;
    }
    }
}

let array = [-2,45,0,-9,11];
console.log("original array",array);
bubbleSort(array);
console.log("sorted array",array);



// time complexity 
// worst case : O(n^2)
// best case : O(n)
// average case : O(n^2)


// space complexity
// O(1) = constant 

//stability = yes



