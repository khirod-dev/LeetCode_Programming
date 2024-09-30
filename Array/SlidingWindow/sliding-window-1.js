
//Max in a window size of 3
let givenArray = [1, 2, 3, 6, -1, 4, 8, -5, 8, -6];// Array of size 10
let k = 3;//window size

function getMaxOfSubarray(givenArray, k) {

    let j = 0;
    let sum = 0;
    let max_subarray = 0;

    for (let i = 0; i < givenArray.length;) {
        sum += givenArray[j];
        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 == k) {
            max_subarray = Math.max(max_subarray, sum);
            sum -= givenArray[i];
            i++;
            j++;
        }
        if (j >= givenArray.length) {
            break;
        }
    }
    return max_subarray;
}
console.log(getMaxOfSubarray(givenArray, k))