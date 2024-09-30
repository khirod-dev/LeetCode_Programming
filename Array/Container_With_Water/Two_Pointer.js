//https://leetcode.com/problems/container-with-most-water/description/
//https://www.youtube.com/watch?v=w7ftYsZtIbs
let height_Array = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let output = 49;


function getMaxWater(height_Array) {


    let start = 0;
    let end = height_Array.length - 1;
    let area = 0;

    while (start < end) {

        area = Math.max(Math.min(height_Array[start], height_Array[end]) * (end - start), area);
        if (height_Array[start] < height_Array[end]) {
            start++;
        } else if (height_Array[start] > height_Array[end]) {
            end--;
        }else{//when both same either take left  1 up or right 1 down
            start++;
            //end--;
        }

    }
    return area;
}

console.log(getMaxWater(height_Array))