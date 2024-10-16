// https://www.youtube.com/watch?v=IlEsdxuD4lY

// Input: m = 3, n = 7
// Output: 28

var uniquePaths = function(m, n) {
  //m = no of rows = length 
  //n = no of colums = width
  // 3X7 
  
  let memoizedArray = Array.from(Array(m),()=>  Array(n).fill(1));

  for (let i = m-2; i>=0; i--){
    for (let j =n-2; j>=0;j--){
        memoizedArray[i][j]= memoizedArray[i][j+1]+memoizedArray[i+1][j]
    }
  }

  return memoizedArray[0][0];
};

console.log(uniquePaths(3,7))
