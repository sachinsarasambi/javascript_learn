console.log("============Find the Greater number=====================");
var greater_result=function(num1,num2) {
    var result=num1>num2 ?num1: num2;
    console.log(result); 
}
greater_result(10,-10);
greater_result(800,899);
console.log("============================even is true or odd number is false============================");

var funEvenOdd=function(param){
    var res=param %2==0?true:false;
    return res;
    
}
console.log("Check the number true or false: "+funEvenOdd(29));
console.log("Check the number true or false: "+funEvenOdd(44));
console.log("Check the number true or false: "+funEvenOdd(0));
console.log("Check the number true or false: "+funEvenOdd(101));

console.log("========================================================");

var wordEvenOdd=function (word) {
 var result=word.length;
var print = result%2==0?"EVEN" :"ODD";
return print;
}
console.log(wordEvenOdd("javascript"));
console.log(wordEvenOdd("developer"));
console.log(wordEvenOdd("Google"));



