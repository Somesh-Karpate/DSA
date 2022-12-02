// what is selection sort?
// in selection sort first we have to find the smallest element and then place it in the first position and so on until the array is sorted


function selectionSort(arr){
    let i,j,min_index;
    let len = arr.length;
    for(i=0;i<len-1;i++){
        min_index = i;
        for(j=i+1;j<len;j++){
            if(arr[j]<arr[min_index]){
                min_index = j;
            }
        }
        swap(arr,min_index,i);
    }
}
function swap(arr,p,q){
    let temp = arr[p];
    arr[p] = arr[q];
    arr[q] = temp;
}

let arr = [25,57,12,19,7,23,1,2];
console.log("original array",arr);
selectionSort(arr);
console.log("sorted array",arr);



// time complexity 
// worst case : O(n^2)
// best case : O(n^2)
// average case : O(n^2)


// space complexity
// O(1) = constant 

//stability = no


