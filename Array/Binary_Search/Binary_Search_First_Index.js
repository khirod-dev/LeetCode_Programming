
//Binary search in a sorted Array 
//Note :- if it is not given as sorted array then we should sort that fiorst before going ahead . as javascript.sort() wont do the work 

let sorted_Array=[5,7,7,7,8,10,11,12,14,16,17,19,20];
let searched_value= 7;

function getindexofFirstSearchedValue(sorted_Array,searched_value){

    let index = -1 ; //thinking it is not there 
    let lowIndex = 0;
    let highIndex = sorted_Array.length -1 ;


//find the mid and see if the array[ mid]  == target then go left if > target go left , if smaller than target then go right 
while (lowIndex <=highIndex){

    let mid= Math.floor(lowIndex + (highIndex-lowIndex)/2);
    if (sorted_Array[mid] == searched_value){
       //as i got the vaue here put that in index thinkinh this is the one .. but carryon to see if it's left is also same 
       index = mid;
       highIndex = mid-1;
      
    }else if (sorted_Array[mid] < searched_value){
        lowIndex = mid +1
        
    }else{
        highIndex = mid-1;
    }
}
return index;
}

console.log(getindexofFirstSearchedValue(sorted_Array,searched_value))