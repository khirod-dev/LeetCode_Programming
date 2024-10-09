let availableCoins= [1,3,4,5];
let target = 7;

function getMinCoinChange(coins, amount){

let dp =[];
let minCoin = Infinity;
for (let i=0 ; i< amount+1; i++){
       if(i==0){ dp [0]=0;continue}
        for (let j=0; j <= coins.length-1; j++){
            if(i == coins[j] ){
                dp[i]=1;
                break;
            }else if(i > coins[j]){
                minCoin=Math.min(minCoin,1+ dp[i-coins[j]]);
                dp[i]=minCoin;

            }
        }
    }
    return dp.pop();
}

console.log(getMinCoinChange(availableCoins,target))