let number = 1011;
//count if occurence of 1 's in the number 


function countOccurenceOdfOne(number) {

    //number = number.toString(2);

    let count = 0;
    while (number != 0) {
       let isOne= number & 1 ;
       
       if (isOne === 1) count++ ;
        number = number >>> 1;
    }
    return count;

}

console.log(countOccurenceOdfOne(number))