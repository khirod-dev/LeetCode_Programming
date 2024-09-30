let input= [7,1,5,3,6,4]
//Output: 5

function getMin(input){
   let min_index= input.indexOf(Math.min(...input)) ;
   return min_index;
}
function getMax(input){
    let max_index= input.indexOf(Math.max(...input)) ;
    return max_index;
 }
 function getArraySplice(input,index){

    return input.slice(index)
 }

const min_index=getMin(input);
const min_value=input[min_index]
const sliced_array=getArraySplice(input,getMin(input));
const max_index=getMax(sliced_array);
const max_value=sliced_array[max_index]

console.log(max_value-min_value)
