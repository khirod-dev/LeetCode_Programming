//"USA","eletcode","Google"


let capCount=0;

function detectCapital(word){

for (let i=0; i<word.length;i++){
    let char =word[i];
    if(char === char.toUpperCase()){
        console.log(char,char.toUpperCase())
        capCount++;
    }
}

return word.length === capCount 
        || 
        capCount === 0 
        ||
        (word[0]=== word[0].toUpperCase()
         &&
          capCount === 1)
}

console.log(detectCapital('leetcode'))