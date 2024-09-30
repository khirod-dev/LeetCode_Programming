let given_array= [5,7,7,7,7,8,10]; //given a sorted Array
let target =7;
//output = [1,3]


function getLeftIndex (given_array,target){

    let leftIndex = -1;
    let start = 0;
    let end =given_array.length -1 ;

    while (start <= end){
        let mid = Math.floor(start + (end-start)/2);
        if (given_array[mid] == target) {
            leftIndex= mid ;
            end =mid -1;
        } else if (given_array[mid] > target){
            end =mid-1 ;
        }else {
            start = mid +1
        }
    }

    return leftIndex;

}

function getRightIndex (given_array,target){

    let rightIndex = -1;
    let start = 0;
    let end =given_array.length -1 ;

    while (start <= end){
        let mid = Math.floor(start + (end-start)/2);
        if (given_array[mid] == target) {
            rightIndex= mid ;
            start =mid + 1;
        } else if (given_array[mid]>target){
            end =mid-1 ;
        }else {
            start = mid +1
        }
    }

    return rightIndex

}

console.log([getLeftIndex(given_array,target),getRightIndex(given_array,target)])