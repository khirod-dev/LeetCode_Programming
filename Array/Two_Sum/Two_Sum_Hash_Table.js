//https://www.youtube.com/watch?v=7jDS9KQEDbI&t=51s
let given_Array = [16, 4, 23, 8, 15, 42, 1, 2];
let target = 44;

function getTwoSumHashTable(given_Array, target) {

    const ans = {};
    for (let i = 0; i < given_Array.length; i++) {
        if (ans.hasOwnProperty(target - given_Array[i])) {//when the key is present then we got the i & j
            return [i, ans[target - given_Array[i]]]
        } else {//if the complement is not in ans then push the array property as key and value as i
            ans[given_Array[i]] = i;
        }

    }

}

console.log(getTwoSumHashTable(given_Array, target))
    // key | value 
    // -----------
    // 46  |   0
    // 4   |   1
    // 23  |   2
    // 8   |   3
    // 15  |   4
    // 42  |   5
    // 1   |   6
    // 2   |   Wew found now .. 