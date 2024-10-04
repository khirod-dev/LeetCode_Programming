let stockData = [7, 1, 5, 3, 6, 4];
//output =5


function getMaxProfit(stockData) {
    let transactionAmount = []

    for (let i = 0; i < stockData.length; i++) {
        for (let j = 1; j < stockData.length - 1; j++) {
            let buyAmount = stockData[i];
            let sellAmount = stockData[j];
            if (sellAmount > buyAmount) {
                transactionAmount.push( sellAmount -buyAmount);
            }
        }
    }

    return Math.max(...transactionAmount)
}

console.log(getMaxProfit(stockData))