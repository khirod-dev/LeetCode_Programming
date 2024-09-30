//Print the First negative number in a window size of 3
const array = [12, -1, -7, 8, -18, 30, -13, 28];
const k = 3
let j = 0;
let result_array = []
for (let i = 0; i < array.length;) {
    if (array[j] < 0) {
        result_array.push(array[j]);
    }
    if (j - i + 1 < k) {
        j++
    } else if (j - i + 1 == k) {
        console.log(result_array[0] ? result_array[0] : 0);
        if (array[i] == result_array[0]) {//remove only if first element is same in given array and the rest_array else no need

            result_array.shift();
        }
        i++;
        j++
    }
    if (j == array.length) {
        break;
    }
}

// 12,-1,-7  -1
// -1,-7,8     -1
// -7,8,-18    -7
// 8,-18,30    -18
// -18,30,13   -18
// 30,-13,28    0