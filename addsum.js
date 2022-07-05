/*********** print sum of the number until they become single digit 
 *  input => 4
 * output =>10  // 4+3+2+1=10
*/

const sum = (num) =>{
    if(num > 0) {
        return num + sum(num -1); 
    }else return num;
};
console.log(sum(3));


/********************************* */