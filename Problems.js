/**
 * Given a 2D array of size MxN, you need to display N integers which
denotes the column wise addition of the 2D array
Input:
M=4,N=3
Output:
12,15,15
Explanation:
Sum of column-1 : 3+3+2+4= 12
Sum of column-2 : 4+4+3+4 = 15
Sum of column-3 : 2+3+4+4 = 15
 */
let a =[
    [4,5,6],
    [1,2,2],
    [4,4,4],
];

var arraySum = a.reduce((arr1,arr2)=>
    arr1.map((sum,id)=> sum + arr2[id]) // sum = sum + value
);

//console.log(arraySum);

const n = [45,44,23];

const sub = n.reduce(sum);
console.log(sub);
function sum(total,num){
    return total + num;
  //  console.log(sub);
}
