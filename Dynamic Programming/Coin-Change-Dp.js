//https://www.youtube.com/watch?v=NNcN5X1wsaw
let coinsArray = [2, 3, 5]
let amount = 11;
//      |0|1|2|3|4|5|6|7|8|9|10|11
function getMinCoinDp(coins, amount) {
    if (amount <= 0) {
        return 0;
    }
    let dp = Array(amount + 1);
    dp[0] = 0;
    for (let amountToMake = 1; amountToMake <= amount; amountToMake++) {
        dp[amountToMake] = Infinity;//initilize with Infinity
        let minCoin = [];
        for (const coin in coinsArray) {

            if (coinsArray[coin] <= amountToMake) {
                let complement = amountToMake - coinsArray[coin];
                minCoin.push(1 + dp[complement]);
            }

        }
        dp[amountToMake] = Math.min(...minCoin)
    }
    if (dp[amount] == Infinity) {
        return -1;
    }
    return dp.pop();

}
console.log(getMinCoinDp(coinsArray, amount))