//https://www.youtube.com/watch?v=7jDS9KQEDbI&t=51s
let given_Array = [16, 4, 23, 8, 15, 42, 1, 2];
let sorted_Array = [1, 2, 4, 8, 15, 16, 23, 42];//Need to learn how to use quick sort here ..for now just manually sorted 
let target = 44;

function getTwoSum_Sorting(sorted_Array, target) {
    let i = 0;
    let j = sorted_Array.length - 1;
    while (j > 0) {
        if (sorted_Array[i] + sorted_Array[j] > target) { // check if addition is greater than target then take j 1 down
            j--;
        }
        if (sorted_Array[i] + sorted_Array[j] < target) { //check if addition is smaller than target , take i to +1 
            i++;
        } if (sorted_Array[i] + sorted_Array[j] == target) { //when they macthes that is the index 
            return [i, j]
        }
    }

}

console.log(getTwoSum_Sorting(sorted_Array, target))