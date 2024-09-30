//https://leetcode.com/problems/container-with-most-water/description/
//https://www.youtube.com/watch?v=w7ftYsZtIbs
let height_Array = [1,8,6,2,5,4,8,3,7];
let output= 49;
let j=1;


function getmaxArea(height_Array){
    let area=1 ;
    let maxArea =1;

    for (let i=0; i<height_Array.length-2;i++){
    
        for (let j=i+1;j<= height_Array.length-1; j++){
            let min_height=Math.min(height_Array[i],height_Array[j]) ;
            area=min_height*(j-i);
            maxArea = Math.max(maxArea,area);
        }
    }

    return maxArea;
}

console.log(getmaxArea(height_Array))