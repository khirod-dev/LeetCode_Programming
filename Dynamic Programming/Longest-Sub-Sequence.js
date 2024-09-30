//https://www.youtube.com/watch?v=Xq3hlMvhrkE
let givenArray = [3, 4, -1, 0, 6, 2, 3]


function getLongestSubSequence(givenArray) {

    let j = 0;
    let i = 1;

    let memoizedArray = new Array(givenArray.length).fill(1);
    for (let i = 1; i < givenArray.length;) {

        if (givenArray[i] > givenArray[j]) {
            memoizedArray[i] = Math.max(memoizedArray[i], memoizedArray[j] + 1);
            j++;
        } else {
            j++;
        }
        if (j == i) {
            j = 0;
            i++;
        }
    }
    return Math.max(...memoizedArray)

}

console.log(getLongestSubSequence(givenArray))