/**  Write a program to reverse a number
 *  input -> 1234
 *  output -> 4321
 * */

function reverseNum(n){
let reverseNumber =0;
while(n>0){
    let digit = n % 10;
    reverseNumber = reverseNumber * 10 + digit;
    n= Math.floor(n/10);
}
console.log(reverseNumber);
}

reverseNum(14);

