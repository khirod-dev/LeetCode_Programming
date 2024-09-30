//  given that You are climbing a staircase. It takes n steps to reach the top.
//  Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//  n = 1, output 1 (only 1 way)
//  n = 2, output 2 (only 2 ways-> 1+1 or 2)
//  n= 3, Output 3 (only 3 wats -> 1+1+1, 1+2, 2+1)



function getMaxWays(n) {

    let ways_array = [1, 2];
    for (i = 3; i <= n; i++) {
        let ways_array_len = ways_array.length;
        ways_array[i - 1] = ways_array[ways_array_len - 1] + ways_array[ways_array_len - 2]
    }
    return ways_array[n - 1];
}
console.log(getMaxWays(7))//Here Question is Steps =7 