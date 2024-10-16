//https://www.youtube.com/watch?v=GrNSGC8Z2T0&t=8s
let array =[5,4,-1,7,8]
function getMaxOfSubArray(nums){

    // let currentIndexMax=array[0];
    // let overallMax=array[0];


    // for (let i=1; i<array.length;i++){
    //     currentIndexMax=Math.max(array[i],array[i]+currentIndexMax);
    //     overallMax= Math.max(overallMax,currentIndexMax);
    //     console.log(currentIndexMax,'|',overallMax)
    // }


    // return overallMax;

    let maxAtCurrentIndex=[];
    maxAtCurrentIndex[0]= nums[0];
    for (let i=1; i<= nums.length-1; i++){
        maxAtCurrentIndex[i]= Math.max(nums[i], maxAtCurrentIndex[i-1] + nums[i] )
    }

return Math.max(...maxAtCurrentIndex)
}

console.log(getMaxOfSubArray(array))