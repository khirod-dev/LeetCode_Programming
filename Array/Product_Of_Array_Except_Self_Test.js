var productExceptSelf = function(nums) {
let leftArray= Array(nums.length).fill(1);
let rightArray = Array(nums.length).fill(1);
let ansArray= Array(nums.length).fill(1);
for (let i=1; i< nums.length ;i++){
    leftArray[i]= nums[i-1]* leftArray[i-1]
}
for (let i=nums.length-2; i>=0; i--){
    rightArray[i]= nums[i+1]* rightArray[i+1];
    ansArray[i]=leftArray[i]*rightArray[i]
}
ansArray[nums.length-1]=leftArray[nums.length-1]*rightArray[nums.length-1]
return ansArray;
}

let nums =[1,2,3,4];

console.log(productExceptSelf(nums))