// Counting sort is a sorting technique based on keys between a specific range. It works by counting the number of objects having distinct key values (a kind of hashing). Then do some arithmetic operations to calculate the position of each object in the output sequence.

function countingSort(arr,k){
    let count = [];
    for(let i=0;i<k;i++){
        count[i] = 0; 
    }

    for(let i=0;i<arr.length;i++){
        count[arr[i]]++;
    }

    for(let i=1;i<k;i++){
        count[i] = count[i-1] + count[i];
    }

    let output = [];
    for(let i=arr.length-1;i>=0;i--){
        output[count[arr[i]]-1] = arr[i];
        count[arr[i]]--;
    }

    for(let i=0;i<arr.length;i++){
        arr[i] = output[i];
    }
}
let array = [0,1,0,0,4,3,1,5,6];
let k = 7;
console.log("Original array:",array);
countingSort(array,k);
console.log("Sorted array:",array);

// time complexity = O(n+k)

// space complexity = O(k)

// stability = yes
