//https://www.youtube.com/watch?v=GrNSGC8Z2T0&t=8s
let array =[-2,1,-3,4,-1,2,1,-5,4]
function getMaxOfSubArray(array){

    let currentIndexMax=array[0];
    let overallMax=array[0];


    for (let i=1; i<array.length;i++){
        currentIndexMax=Math.max(array[i],array[i]+currentIndexMax);
        overallMax= Math.max(overallMax,currentIndexMax);
        console.log(currentIndexMax,'|',overallMax)
    }


    return overallMax;
}

console.log(getMaxOfSubArray(array))