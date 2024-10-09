let givenArray = [16, 4, 23, 8, 15, 42, 1, 2]
//Firsdt sort teh array 
givenArray = givenArray.sort((a, b) => a - b);
console.log(givenArray);
let target = 44;


function getTwoSum(givenArray, target) {

    let lowIndex = 0;
    let highIndex = givenArray.length - 1;


    while (lowIndex < highIndex) {

        if (givenArray[lowIndex] + givenArray[highIndex] == target) {

            return [lowIndex, highIndex]
        }

        if (givenArray[lowIndex] + givenArray[highIndex] >= target) {
            highIndex--;
        } else {
            lowIndex++;
        }

    }
}

console.log(getTwoSum(givenArray,target))