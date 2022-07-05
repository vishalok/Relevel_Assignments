/**
 * reverse of array
 */
function reverse(arr){
    return arr.length < 2 ? arr : [arr.pop()].concat(reverse(arr));
}

arr =[4,2,3,1];
console.log(reverse(arr));
