/** find smallest element in the array 
 * input -> a = [4,7,2,8]
 * output -> 2
*/
let arr = [48,70,5,1,18]
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] > arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            
        }

        
    }
}


console.log(arr[0]);
