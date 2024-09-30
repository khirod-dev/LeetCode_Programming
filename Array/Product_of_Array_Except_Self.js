



function findMulutiplier(numArray){
const numArray_length=nums.length;
let answer=new Array(numArray_length).fill(1);


let leftProduct=1;
for (let i=0;i<numArray_length;i++){
    answer[i]=leftProduct;
    leftProduct =leftProduct*numArray[i]
}
let rightProduct=1;
for(let i=numArray_length-1;i>=0;i--){
    answer[i]=answer[i] * rightProduct;
    rightProduct=rightProduct*numArray[i]
}
return answer;
}
let nums = [1, 2, 3, 4];
console.log(findMulutiplier(nums))