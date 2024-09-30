
let num_array = [16,8,23,4,15];
let target = 19;
function getTwoSum_Brute_Force(num_array, target) {

    for (let i = 0; i < num_array.length; i++) {
        for (let j = i+1; j < num_array.length; j++) {
            if (num_array[i] + num_array[j] == target) {
                return [i, j]
            }

        }


    }
}

console.log(getTwoSum_Brute_Force(num_array, target));
