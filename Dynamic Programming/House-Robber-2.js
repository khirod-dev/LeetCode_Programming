//https://www.youtube.com/watch?v=ucmqYGVGQK8
//Extn to House Robber-1 but houses in circular order 

var rob = function(nums) {
    
    let first_houseRobbedArray=[];
    let last_houseRobbedArray=[];
    for (let i=0; i< nums.length-1;i++)
        {
            first_houseRobbedArray[i]= nums[i];
            last_houseRobbedArray[i]=nums[i+1]
     }
   
     const maxRobbedAmount= Math.max(...robHouse(first_houseRobbedArray),...robHouse(last_houseRobbedArray));
     return maxRobbedAmount;
    
};

function robHouse(houseArray){

    let maxAmountRobbed=[];
    maxAmountRobbed[0]=houseArray[0];
    maxAmountRobbed[1] = houseArray[1] > houseArray[0] ? houseArray[1]:houseArray[0];

    for (let i=2; i<houseArray.length;i++){
        maxAmountRobbed[i]= Math.max(houseArray[i]+maxAmountRobbed[i-2], +maxAmountRobbed[i-1])
    }
return maxAmountRobbed;

}

let nums= [1,2,3];
console.log(rob(nums))