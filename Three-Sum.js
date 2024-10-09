// Input: nums = [-1,0,1,2,-1,-4]
let target = 0
// Output: [[-1,-1,2],[-1,0,1]]

let inputArray = [0,1,1];
let inputArray_Sorted = inputArray.sort((a, b) => a - b);
inputArray_Sorted = [-4, -1, -1, 0, 1, 2]

function getThreeSum(inputArray_Sorted, target) {

    let lowestElementIndex = 1;
    let highestElementIndex = inputArray_Sorted.length - 1;
    let ansArray =[]

    while (lowestElementIndex < highestElementIndex) {
        let firstELement = inputArray_Sorted[lowestElementIndex - 1];

        let complement = target - firstELement;

        if (inputArray_Sorted[lowestElementIndex] + inputArray_Sorted[highestElementIndex] === complement) {

             ansArray.push([firstELement,
                 inputArray_Sorted[lowestElementIndex],
                 inputArray_Sorted[highestElementIndex]]);
           
        }
        if (inputArray_Sorted[lowestElementIndex] + inputArray_Sorted[highestElementIndex] >= complement) {
            highestElementIndex--;
        } else {
            firstELement = inputArray_Sorted[lowestElementIndex];
            lowestElementIndex++;
        }

    }
    return ansArray;


}


console.log(getThreeSum(inputArray_Sorted, target))