//Use Binary Search 
// if Element is not there return -1
let givenArray =  [0, 1, 2,4, 5, 6, 7,];
let targetElement = 9
function getMininRotatedSubArray(givenArray, targetElement) {

    let lowIndex = 0;
    let highIndex = givenArray.length - 1;
   
    
    while (lowIndex <= highIndex){
         let middleIndex = Math.floor((lowIndex + highIndex) / 2);

        if (givenArray[middleIndex] == targetElement) {
            return middleIndex;
        }
        else if (givenArray[middleIndex] > targetElement) {
            highIndex =middleIndex-1;
        }
        else if(givenArray[middleIndex] < targetElement){
            lowIndex= middleIndex+1;
        }
    }return -1;

}

console.log(getMininRotatedSubArray(givenArray, targetElement));
