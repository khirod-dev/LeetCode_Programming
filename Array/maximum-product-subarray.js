let num_array=[-1,-4,5,6,-7,8];
const num_array_len=num_array.length;
let left_product=1;
let right_product =1;
let max= num_array[0];

function getMaxMultiplierSubArray(num_array){


    for( let i=0;i<num_array_len;i++){
        left_product = left_product == 0? 1:left_product; //if the product is 0 then default to 1
        right_product = right_product == 0? 1:right_product;//if the product is 0 then default to 1

        left_product*=num_array[i];
        right_product*=num_array[num_array_len-1 -i];
        max= Math.max(max,left_product,right_product);
    }
    return max;
}
console.log(getMaxMultiplierSubArray(num_array))
