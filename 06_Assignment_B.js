console.log("==========================================================");
function checkEvenOdd(num1){
    if(num1 % 2==0){
        console.log(" This number is EVEN ");
    }else{
        console.log(" This number is Odd");
    }

}
checkEvenOdd(45);
checkEvenOdd(14);


function checkEvenOdd_1(num2) {
    if(num2 % 2==0){
        console.log(" This number is EVEN ");
    }else{
        console.log(" This number is Odd");
    }
    
}
checkEvenOdd_1(15);
checkEvenOdd_1(20);


console.log("===============================================================");

function voteCheck(age) {
    if(age>=18){
        console.log("is eligible for votting");

    }else{
        console.log("is not eligible for votting");
    }
 
    
}
voteCheck(18);
voteCheck(20);
voteCheck(17);
voteCheck(40);

console.log("=========================To check Charecter ===================================");
function toCheck(name) {
  var length=name.length;


  if(length >=10){
    console.log(" this is contai javascript=ES6 more than 10 chrecter ");

  }else{
    console.log("is not more tham 10 charecter ");
  }

}toCheck("javascript-ES6");
console.log("=========================== TO check Strtwith java =======================================");

console.log("====================================================================");

var string ="javascript Language";
if (string.startsWith){
    console.log(" This string is starts with java ");

}else{
    console.log("No string starts with java ");
}

















