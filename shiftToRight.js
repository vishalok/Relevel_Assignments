/***
 * shift -ve to one side and +ve one side
 * input => [1,5,-9,-8,4,-5,2,-3,7,-4]
 * output => [1,2,4,5,7,-3,-4,-5,-8,-9]
 */

 function shiftToRight(arr){
    for(let i=0;i<arr.length -1;i++){
        if(arr[i] < arr[i+1]){
            //swap program
            let temp = arr[i];
            arr[i]=arr[i+1];
            arr[i+1] = temp;
        }
    }
    for(let i=0;i<arr.length-1;i++){
        if(arr[i] < arr[i+1]) return shiftToRight(arr);
    }
    return arr;
}

let arr = [2,-9,3,8,-8,-5,4,-3]
console.log(shiftToRight(arr))