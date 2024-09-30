function getDuplicate(inputArray){
    let uniqueData= new Set();
    for (i=0;i<inputArray.length;i++){

        if(!uniqueData.has(inputArray[i])){
            uniqueData.add(inputArray[i]);
           
        }else{

            return true;
        }
    }
    return false;

}


let nums = [1,2,3,5,3]
console.log(getDuplicate(nums))