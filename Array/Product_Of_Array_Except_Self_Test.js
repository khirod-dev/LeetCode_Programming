let givenArray = [3, 4, 6, 1, 2];

function getProductOfArray(givenArray) {
    let leftMulansArray = Array(givenArray.length).fill(1);
    let rightMulansArray = Array(givenArray.length).fill(1);
    let ansArray=[];
    //Left To Right
    for (let i = 1; i < givenArray.length; i++) {
       if(i==0){
        leftMulansArray[i]=1;
        
       }else{
        leftMulansArray[i]= givenArray[i-1] * leftMulansArray [i-1]
       }
       
    }

    //Right ToLeft
    for (i=givenArray.length -2  ;i>0;i--){
     
        rightMulansArray[i]= rightMulansArray[i+1]* givenArray [i+1]
    }

    for (i=0; i<leftMulansArray.length ;i++){
        ansArray[i]= leftMulansArray[i]*rightMulansArray[i]
    }
    return ansArray;
}
console.log(getProductOfArray(givenArray))