/**
 * [1,2,3,4]-input
 * if x=2 print true
 *if not in array then false
 */
array=[1,2,3,4];
let x=1;
let ans = false;
for(let a of array){
    if(a ===x){
        ans = true;
    }
}
if(ans){
    console.log("present");
}else{
    console.log("absent");
}
