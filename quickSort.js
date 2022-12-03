// WHat is Quicksort?
// basically quick sort is sorting technique in which we can the last element as a pivot element and we keep elements which are smaller than pivot to the left 
// of pivot and elements which are greater to the right of pivot and this goes on until the array is sorted


function quickSort(arr,left,right){
    if(left<right){
        let p = partition(arr,left,right);
        quickSort(arr,left,p-1);
        quickSort(arr,p+1,right); 
}
}
function partition(arr,left,right){
    let pivot = arr[right];
    let i = left -1;
    for(let j=left;j<right;j++){
        if(arr[j]<arr[right]){
            i++;
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i]=temp;
        }
    }
    let temp = arr[right];
    arr[right]=arr[i+1];
    arr[i+1] = temp;

    return i+1;
}
let array = [24,12,2,17,9,8];
console.log("Original array:",array);
quickSort(array,0,array.length-1);
console.log("Sorted array:",array);


// time complexity 
// worst case : O(n^2)
// best case : O(n*log n)
// average case : O(n*log n)


// space complexity
// O(n)  

//stability = yes
