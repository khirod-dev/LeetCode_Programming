
//https://www.youtube.com/watch?v=Yan0cv2cLy8
let nums = [3,2,1,0,4]


var canJump = function (nums) {


    let canReach= false;
    if(nums.length == 1 ){
        return true;
    }
    for (let i = nums.length - 1; i >= 0;) {
        
        for(let j= nums.length -2; j>=0;j--){
            if(nums[j] >= i-j){
                i--;
                canReach = true;
            }else{
                canReach = false;
            }
        }
    }

    return canReach;
}



console.log(canJump(nums))