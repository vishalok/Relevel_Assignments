//print right angle trianle

function trianle (i=1,max_Num){
    console.log("*".repeat(i));
    i++;
    if(i<= max_Num){
    trianle(i,max_Num)
    }
}

trianle(1,5);


/*
function trianle (i,min_Num){
    console.log("*".repeat(i));
    i--;
    if(i>= min_Num){
    trianle(i,min_Num)
    }
}

trianle(5,1);
*/