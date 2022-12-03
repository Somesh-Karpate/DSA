// The idea of Radix Sort is to do digit by digit sort starting from least significant digit to most significant digit. Radix sort uses counting sort as a subroutine to sort.

function radixSort(arr){
    let max = Math.max(...arr);
    let exp = 1;

    while(max>=exp){
        countingSort(arr,exp);
        exp = exp * 10;
    }
}
function countingSort(arr,exp){
    let count = [];
    let k = 10;
    for(let i=0;i<k;i++){
        count[i] = 0; 
    }

    for(let i=0;i<arr.length;i++){
        count[parseInt((arr[i]/exp)%10)]++;
    }

    for(let i=1;i<k;i++){
        count[i] = count[i-1] + count[i];
    }

    let output = [];
    for(let i=arr.length-1;i>=0;i--){
        output[count[parseInt((arr[i]/exp)%10)]-1] = arr[i];
        count[parseInt((arr[i]/exp)%10)]--;
    }

    for(let i=0;i<arr.length;i++){
        arr[i] = output[i];
    }
}
let arr=[432,56,23,82,2,4,6];
console.log("Original array:",arr);
radixSort(arr);
console.log("Sorted array:",arr);



// time complexity = O(ln)  l=length of the maximum number.