//Input: height = [1,8,6,2,5,4,8,3,7]
//Output: 49

let height = [1,8,6,2,5,4,8,3,7]
//Output: 49

function getMaxArea(height){

    let lowestIndex= 0;
    let highestIndex= height.length-1;
    let maxArea=1;
    while (lowestIndex < highestIndex){


        if(height[lowestIndex] <= height[highestIndex] ){
            maxArea= Math.max(maxArea, (height[lowestIndex] * (highestIndex- lowestIndex))  )
            lowestIndex++;
        }else if(height[lowestIndex] > height[highestIndex] ){
            maxArea= Math.max(maxArea, (height[highestIndex] * (highestIndex- lowestIndex))  )
            highestIndex--;
        }


    }

    return maxArea;
}

console.log(getMaxArea(height));