const array = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;//window size

function getMaxNumberInSubArray(givenArray, k) {

    let j = 0;
    let subArray =[];
    for (let i = 0; i < givenArray.length;) {
        subArray.push(givenArray[j])
        if(j-i+1 < k){//slide j
            j++
        }else if (j-i+1 == k){
            console.log(Math.max(...subArray)+'\n');
            subArray.shift();
            i++;
            j++
        }

        if(j == givenArray.length){
            break
        }

    }

}
console.log(getMaxNumberInSubArray(array, k))
//1, 3, -1 -> 3
//3, -1, -3 ->3
//-1, -3, 5 -> 5
//-3, 5, 3 -> 5
//5, 3, 6 -> 6
//3, 6, 7 -> 7
