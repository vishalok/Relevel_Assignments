/** find largest element in the array 
 * input -> a = [4,7,2,8]
 * output -> 8
*/
let arr = [148,70,55,991,718]
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] < arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            
        }

        
    }
}


console.log(arr[0]);
