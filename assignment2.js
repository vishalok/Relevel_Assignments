/**Requirements: "2.) Given 3 numbers. You need to find the smallest of three numbers without using comparison
operators
Input -> 12,44,2
Output -> 2" */

function smallestNum(a,b,c){

    let x=0;
    while( a && b && c){
        a--;
        b--;
        c--;
        x++;
    }
   return x;

}

console.log(smallestNum(45,59,100));