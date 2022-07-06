/*diagonal matrix*/
let matrix = [
        [1,0,0,0],
        [0,8,0,0],
        [0,0,5,0],
        [0,0,0,3],
]
function SpiralForm(m,n,matrix){ // m=> no of rows  , n => no of columns
let i,k=0;l=0; // i => iteration , k => rows index , l => column index

let last_row = m-1, last_col = n-1;

while(k <= last_row && l <= last_col ){
//prints first row
    for(i=l;i<=last_col;i++){
        console.log(matrix[k][i]);
        k++;
    }

    for(i=k;i<=last_row;i++){
        console.log(matrix[i][last_col]);
        last_col--;
    }

}
    if(k <= last_row){
        for(i=last_col;i>=l;i--){
            console.log(matrix[last_row][i]);
            last_row--;
        }
    }

    if(l<= last_col){
        for(i=last_row;i>=k;i--){
            console.log(matrix[i][l]);
            l--;
        }
    }
}

console.log(SpiralForm(4,4,matrix));
