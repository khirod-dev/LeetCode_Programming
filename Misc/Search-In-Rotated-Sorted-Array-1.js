//https://www.youtube.com/watch?v=5qGrJbHhqFs&t=881s
// NOTE:- Array has no duplicates 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    
    let low = 0;
    let high =nums.length-1;

    while (low <= high){
    let mid = Math.floor((low+high)/2);
        if(nums[mid]=== target){
            return mid ;
        }
        if (nums[mid]>= nums[low] ){
            //left sorted and number is in left side 

            if(nums[low] <= target &&  nums[mid] > target){

                high= mid-1;
            }else{
                low= mid+1;
            }
        }else{
            if(nums[mid]< target && nums[high] >=target){
                low =mid+1
            }else{
                high = mid-1
            }
        }
    }return -1;

};


let nums= [5,1,3];
let target = 3;

console.log(search(nums,target))