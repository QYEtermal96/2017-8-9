var array = [0,1];
var number = 10;

if(number === 0){
    console.log(0);
}else if(number ===1){
    console.log(1);
}else{
    for(;array.length < number;){
        array[array.length] = array[array.length - 1] +array[array.length - 2];
    }
    console.log(array[number-1]);
}

