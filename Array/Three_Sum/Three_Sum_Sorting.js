let given_Array = [-1, 0, 1, 2, -1, -4];
let sorted_Array = [-4, -1, -1, 0, 1, 2];

let target = 0;
let trplet_array=[] ;
function getThreeSumSortedArray(sorted_Arry, target) {

    for (i = 0; i < sorted_Arry.length; i++) {
        let first_Element = sorted_Arry[i];

        let first = i + 1;
        let last =sorted_Arry.length- 1;
        while (first < last) {
            let sum =first_Element + sorted_Arry[first] + sorted_Arry[last];
            if(sum === 0){
                trplet_array.push([first_Element,sorted_Arry[first],sorted_Arry[last]]);// this i need to think how to add as array 
                first ++;
                last --;
            }
            if(sum > target){
                last --;
            }else if (sum < target){
                first ++;
            }
        }

    }
    return trplet_array;
}


console.log(getThreeSumSortedArray(sorted_Array, target))