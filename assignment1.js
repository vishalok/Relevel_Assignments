/**Requirements: "1.) Given 2 numbers as input. You need to find if they have opposite signs or not.
Input -> +123, -12
Output -> true"
 */

function Assign (x,y){

    if(x >= 0 && y < 0){
        return true;
    }else{
       return false;
    }

}

console.log(Assign(-1,-12));