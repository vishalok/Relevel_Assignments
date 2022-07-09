/**
 * input -> [1,5,6,2]
 * output -> [6,11,8,2]
 * print sum of next element in array and print lastdigit as it is. 
 */

const a=[4,1,5,3];

const n =a.length;

for(let i=0;i<n-1;i++){
    a[i]=a[i+1];   
}    
    console.log(a);
