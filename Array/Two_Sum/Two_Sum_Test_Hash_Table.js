let givenNumber = [2, 7, 11, 15];
let target = 18;

function getTwoSum(givenNumber,target){
    let map= {};
    for (let i=0; i<givenNumber.length ;i++){

        let complement = target - givenNumber[i];
        if(map.hasOwnProperty(complement)){
            return [map[complement],i];
        }
        map[givenNumber[i]]= i;


    }
}

console.log(getTwoSum(givenNumber,target))