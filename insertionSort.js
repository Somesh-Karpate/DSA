// what is insertion sort?
// basically in insertion sort we assume that the first element is sorted so we have a loop from the next elemenet and we assign key as that next element
// and then we compare the sorted element with the key and so on until the array is sorted.

//basically we insert the element to it's correct position




function insertionSort(arr){
    let i,j,key;
    let len = arr.length;
    for(i=1;i<len;i++){
        key = arr[i];
        j = i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j = j - 1;
        }
        arr[j+1]=key;
    }
}
let array = [9,5,1,4,3];
console.log("Original array:",array);
insertionSort(array);
console.log("Sorted array:",array);



// time complexity 
// worst case : O(n^2)
// best case : O(n)
// average case : O(n^2)


// space complexity
// O(1) = constant 

//stability = yes