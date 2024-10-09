/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

    let one = 1;
    let two = 1;
    let steps = 0;
    for (let i = n - 2; i >= 0; i--) {
        steps = one + two;
        two = one;
        one = steps;



    }
    return steps;

};

console.log(climbStairs(3))