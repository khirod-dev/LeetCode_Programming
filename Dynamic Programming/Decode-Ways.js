//https://www.youtube.com/watch?v=FEkZxCl_-ik
//issues 
let s = "27"
var numDecodings = function(s) {

    let memoization=Array(s.length+1).fill(0);
    if (s==0){
        return 0;
    }
    memoization[0]=1;
    if(parseInt(s.charAt(0)) > 0){
        memoization[1]=1;
    }else{
        return 0;
    }
    for(let i=1; i < s.length;i++){
        console.log(parseInt(s.charAt(i) ));
        console.log(parseInt(s.substring(i-1,i+1)));
        if(parseInt(s.charAt(i)) > 0){

            memoization[i+1]=memoization[i]
        }if(10 <= parseInt(s.substring(i-1,i+1)) && parseInt(s.substring(i-1,i+1)) <=26 ){
            memoization[i+1]=memoization[i+1]+memoization[i-1]
        }

    }
return memoization.pop();

    
};

console.log(numDecodings(s))
