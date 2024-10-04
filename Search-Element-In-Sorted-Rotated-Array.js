
//rotated sorted array search value
let givenArray = [7, 8, 9, 1, 2, 3, 4, 5, 6];
let target = 9;


function serachValinRotatedSortedArray(givenArray,target){


    let lowIndex=0 ;
    let highIndex=givenArray.length-1 ;
    

    while (lowIndex <= highIndex){
    let midIndex= Math.floor((lowIndex+highIndex)/2) ;

    if(givenArray[midIndex]== target){
        return midIndex;
    }
    if( givenArray[lowIndex] <= givenArray[midIndex]){//left is sorted

        if((target >=givenArray[lowIndex] && target <=givenArray[midIndex])){
            highIndex =midIndex -1;
        }else{ //although sorted but target is not in left half so get rid of left half
            lowIndex =midIndex+1;

        }
    }else{
        if(target >= givenArray[midIndex] && target <= givenArray[highIndex]){
            //target rests here 
            lowIndex =midIndex+1;
        }else{
            highIndex =midIndex-1;
        }
    }
    
   


    }return -1;
}

console.log(serachValinRotatedSortedArray(givenArray,target))