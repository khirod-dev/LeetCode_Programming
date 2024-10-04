let data= [-1,0,1,2,-1,-4];
const target =0;
function getThreeSum(data,target){
    data.sort((a,b) =>a-b);
    //[-4, -1, -1, 0, 1, 2]

  
    let ansData=[]
   for(let i=0; i< data.length-1;i++){

    let firstElement=data[i];
    let first = i+1;
    let last =  data.length-1;
    let complement = target -firstElement;

    while(first<last){
        let secondElement = data[first];
        let thirdElement = data[last];

        if(secondElement+thirdElement >complement){
            last --;
        }else if (secondElement+thirdElement < complement){
            first ++;
        }else if (secondElement+thirdElement == complement){
            ansData.push([firstElement,secondElement,thirdElement]);
            first++;
            last--;
        }
    }

   
   }
  
 return ansData;


}
function removeDuplicatesFromArray(array){

}


console.log(...getThreeSum(data,target));