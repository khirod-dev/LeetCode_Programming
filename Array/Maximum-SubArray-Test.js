let givenArray=[-2,-1,-3,4,-1,2,1,-5,4];


function getMaxSubarry(givenArray){

    let overAllMax =-2;
    let maxAtCurrentIndex= -2;
 
    for (let i=1; i< givenArray.length;i++ ){
        maxAtCurrentIndex= Math.max(givenArray[i] , givenArray[i]+maxAtCurrentIndex);  
        overAllMax=Math.max(maxAtCurrentIndex,overAllMax)
    }
    
return overAllMax;
}
console.log(getMaxSubarry(givenArray))