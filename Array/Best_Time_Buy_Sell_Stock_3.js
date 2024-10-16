var maxProfit = function (prices) {
    let maxProfit = 0;
    // for (let buyIndex=0 ; buyIndex<=prices.length-2 ;  ){
    //     for (let sellIndex=buyIndex+1; sellIndex <= prices.length-1;sellIndex ++){
    //         if(prices[sellIndex] > prices[buyIndex]){
    //             maxProfit= Math.max(maxProfit , prices[sellIndex]- prices[buyIndex]) ;
    //         }else if(prices[sellIndex] < prices[buyIndex]){
    //             buyIndex++ ;
    //         }
    //     }
    // }
    // return Math.max(maxProfit)

    let buyIndex = 0;
    let sellIndex = 1;
    while (buyIndex < sellIndex) {
        if (prices[sellIndex] > prices[buyIndex]) {
            maxProfit = Math.max(maxProfit, prices[sellIndex] - prices[buyIndex]);
            sellIndex++;
        } else if (prices[sellIndex] < prices[buyIndex]) {
            buyIndex++;
            sellIndex++;
        }
    }

};
let prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices));