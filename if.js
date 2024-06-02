let a = 90;
let b = 70;
let c = 35;
let test = prompt('Enter the Number:');
let result;

if (test >= a){
    result = "A";
}
else if(test >= b){
    result ="B";
}
else if ( test >= c){
    result = "C";
}
else{
    result = "RA"
}
console.log( `Your Mark is :${test}\n`  +' Result is ' + result);