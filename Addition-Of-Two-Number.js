//Add two numbers without using + or - sign 
//bitwise operator ^(XOR), & (AND) , <<(SHIFT LEFT)


let a= 6;
let b = 6;


function addTwoNumbers(a,b){

    let carry ;
    while (b!==0){
        carry = a&b;
        a = a^b;
        b= carry <<1


    }
    return a ;

}

console.log(addTwoNumbers(a,b))