let text1 = "abc";
let text2 = "def";

function getLongestCommonSubsequence(text1, text2) {

    let twoDArray = Array.from({ length: text2.length + 1 }, () => Array(text1.length + 1).fill(0));

    for (let j = 1; j <= text1.length-1; j++) {
        for (let i = 1; i <= text2.length-1; i++) {

            if (text1[j-1] === text2[i-1]) {
                console.log(text1[j]+'/'+ text2[i])
                twoDArray[i][j] = 1 + twoDArray[i - 1][j - 1]
            }else{
                twoDArray[i][j]= Math.max(twoDArray[i][j-1],twoDArray[i-1][j])
            }
        }

    }

    return twoDArray[text2.length][text1.length];

}

console.log(getLongestCommonSubsequence(text1, text2))