//Use Binary Search 
let givenArray = [4, 5, 6, 7, 1, 2,3];

function getMininRotatedSubArray(givenArray) {

    let lowIndex = givenArray[0];
    let highIndex = givenArray.length - 1;
    let minimumValue = Infinity;

    while (lowIndex <= highIndex) {
        let midIndex = Math.floor((lowIndex + highIndex) / 2);
        if (givenArray[midIndex] >= givenArray[lowIndex]) {//it's sorted side
            minimumValue = Math.min(minimumValue, givenArray[lowIndex]);
            lowIndex = midIndex + 1;

        } else if (givenArray[midIndex] <= givenArray[highIndex]) { //right is sorted

            minimumValue = Math.min(minimumValue, givenArray[midIndex]);
            lowIndex = midIndex + 1
        }

    }
    return minimumValue;
}
console.log(getMininRotatedSubArray(givenArray));
