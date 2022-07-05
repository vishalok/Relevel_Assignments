/** let num = 1234 => 1 + 2 + 3 + 4 
 *   // 1 + 2 + 3 + 4 = 10
 * 
 * input => 5247
 * output =>18 // 5 + 2 + 4 + 7 => 18
 * 
*/

const findsum = (num) => {
    if(num < 10) return num; // single digit will return
    let lastDigit = num % 10;
    let remainingDigit = Math.floor(num /10);

    return lastDigit + findsum(remainingDigit); 
};

console.log(findsum(1234));
