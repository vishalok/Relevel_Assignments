//To Find  MIN AND MAX IN THE ARRAY
//using function

function numberArray (numArray){
let minValue = numArray[0];
let maxValue = numArray[0];

for(let i=0;i<=numArray.length -1;i++){
    
    if(numArray[i] < minValue){
    
    minValue = numArray[i];
    }
    
    if(numArray[i] > maxValue){
    
        maxValue = numArray[i];
        }

}

console.log("minimum value = ",minValue);
console.log("maximum number = ",maxValue);
}


numberArray([578,78,247,14,11]);

