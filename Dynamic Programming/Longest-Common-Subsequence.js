//https://www.youtube.com/watch?v=e9tUPwZZSBI
let array_1 = ['a', 'b', 'c', 'd', 'a', 'f'];
let array_2 = ['a', 'c', 'b', 'c', 'f'];


function getLongestCommonSubSeq(array_1, array_2) {

    let m= array_1.length;
    let n=array_2.length;

    let dp = Array.from(Array(m+1),()=> new Array(n+1).fill(0))

    for (let i =1 ; i <=m;i++){

        for (let j=1; j<=n;j++){
          
            if(array_1[i] === array_2[j]){
                dp[i][j]= dp[i-1][j-1]
            }
        }
    }

return dp;

}

console.log(getLongestCommonSubSeq(array_1, array_2));