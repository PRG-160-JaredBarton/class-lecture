function getAverage(a,b,c,d,e,f){

var average = (a + b + c + d + e + f) / 6; //local varible
console.log(average);
return average;


}

var myResult = getAverage(7,3,6,8,13,10); //global varible

function logResult(){

console.log("the average is" + myResult);


}

logResult();
