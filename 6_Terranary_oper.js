var tcsEligibilityCheck = function (grad_score, hsc_score, ssc_score, candidate_name) {
    console.log(grad_score >= 70 );
        var result = grad_score >= 70 || hsc_score >= 80 || ssc_score > 90  // false || true
            ? `Congrates ${candidate_name} you are eligible for TCS interview`
            : "Unfortunately you are not eligible for interview";
        console.log(result);
    }
    tcsEligibilityCheck(80, 86, 90, "Mohit Sharma");
    tcsEligibilityCheck(69, 65, 95, "Anil Pende");
    
    console.log("=====================================================================================================");

    var myResult = 0/0;
console.log(myResult);
console.log(typeof myResult);
console.log("=====================================================================================================");


var myName = "TEST";
var myAge = "31";
console.log(typeof myName);
console.log(typeof myAge);

var myAgeInNumber = +myAge; 
console.log(myAgeInNumber, typeof myAgeInNumber);

var myNameString =  +myName
console.log(myNameString, typeof myNameString);
console.log("=====================================================================================================");

var myResult = 0/0;
console.log(myResult);
console.log(typeof myResult);

console.log("=====================================================================================================");


var myAge = "31";
console.log(myAge, typeof myAge);
var myAgeInNumber = +myAge; 
console.log(myAgeInNumber, typeof myAgeInNumber);

var myName = "TEST";
console.log(typeof myName);
var myNameString =  +myName
console.log(myNameString, typeof myNameString);

console.log("============================================================");

console.log("===== Implicit conversion======");
console.log("4"-true); // 4-1

var operand2 = 200;
console.log(operand2, typeof operand2);
var operand2Str =  operand2.toString();
console.log(operand2Str, typeof operand2Str);
console.log("=====================================================================================");
console.log("===== Implicit conversion======");
console.log("4"-true); // 4-1

var operand2 = 200;
console.log(operand2, typeof operand2);
var operand2Str =  operand2.toString();
console.log(operand2Str, typeof operand2Str);
console.log("==========================================================================================");



var rating = 3;
var isAssigComplete = false;

if(rating>=3 && isAssigComplete==true){
    console.log("you are good, Excellent");
}
































