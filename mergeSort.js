// what is merge sort?
// merge sort sort depends on divide and conquer algo. in which first we do winding til we get on element and applying base condition then we do unwinding i.e merging


function mergeSort(arr){
    const half = arr.length/2;

    if(arr.length <= 1){
        return arr;
    }

    let left = arr.splice(0,half);
    let right = arr;
    
    let leftSortedArray = mergeSort(left);
    let rightSortedArray = mergeSort(right);

    return merge(leftSortedArray,rightSortedArray);
}
function merge(leftArray,rightArray){
    let SortedArray = [];
    while(leftArray.length && rightArray.length){
    if(leftArray[0]<rightArray[0]){
        SortedArray.push(leftArray.shift());
    }else{
        SortedArray.push(rightArray.shift());
    }
}
return [...SortedArray,...leftArray,...rightArray];
}
let array = [23,76,1,34,18,3,2];
console.log("Original array:",array);
let result = mergeSort(array);
console.log("Sorted array:",result);


// time complexity 
// worst case : O(n*log n)
// best case : O(n*log n)
// average case : O(n*log n)


// space complexity
// O(n)  

//stability = yes
