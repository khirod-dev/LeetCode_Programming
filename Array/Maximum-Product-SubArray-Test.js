let givenArray= [2,3,-2,-5,6,-1,4];


function getMaxProductSubArray(givenArray){

    let leftIndexValue = givenArray[0];
    let rightIndexValue = givenArray[givenArray.length-1];
    let mulMax= 1;

    for(let i=1; i< givenArray.length;i++){

        leftIndexValue = leftIndexValue * givenArray[i] == 0 ? 1:leftIndexValue * givenArray[i]
        rightIndexValue = rightIndexValue * givenArray[givenArray.length-1-i] == 0? 1:rightIndexValue * givenArray[givenArray.length-1-i];
        mulMax= Math.max(leftIndexValue , rightIndexValue , mulMax);

    }
return mulMax;
}
console.log(getMaxProductSubArray(givenArray))