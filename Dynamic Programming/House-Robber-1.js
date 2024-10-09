//https://www.youtube.com/watch?v=VXqUQYGMnQg
var rob = function(nums) {
    
    let robbedAmount = [];
    robbedAmount[0]= nums[0];
    robbedAmount[1] = nums[1] > nums[0] ? nums[1] :nums[0];
    for (let i=2; i<= nums.length-1;i++){
        robbedAmount[i]= Math.max(nums[i]+robbedAmount[i-2], robbedAmount[i-1])
        
    }

    return robbedAmount.pop();
};
let nums= [2,7,9,3,1];
//let nums= [1,2,3,1];
console.log(rob(nums))