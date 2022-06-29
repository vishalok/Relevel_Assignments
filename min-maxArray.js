//To Find  MIN AND MAX IN THE ARRAY
//using function

function numberArray (numArray){
let minValue = numArray[0];

for(let i=0;i<=numArray.length -1;i++){
    
    if(numArray[i] < minValue){
    
    minValue = numArray[i];
    }
}

console.log("minimum value = ",minValue);
}

numberArray([578,78,247,14,11]);

/**************** */


//let numArray1 = [234,12,344,4]; //defined array
function maxArray (numArray1){
let maxValue = numArray1[0];

for(let i=0;i<=numArray1.length -1;i++){
    
   
    if(numArray1[i] > maxValue){
    
    maxValue = numArray1[i];
    }
}
console.log("maximum number = ",maxValue);
}
maxArray([378,47,52,41,4]);
