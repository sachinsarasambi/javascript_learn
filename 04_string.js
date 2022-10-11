var fName="virat";
var lNmae="kohali";
var result=fName.concat(lNmae);
console.log(result);
console.log("===================Replace string=====================");
var greet="Good Morning bro and sis"
var replaceDemo=greet.replace('Morning','Evening');
console.log(replaceDemo);
console.log("================ToUpper case============ToLower case===============================");
console.log(replaceDemo.toUpperCase());
console.log(replaceDemo.toLowerCase());
console.log("=========================================================");
// var greet="  Good Morning bro and sis";
// console.log(greet.length);
// var trimResult=greet.trim();

// console.log(trimResult.length);

console.log("==============trim()===============");
var greet = "    Good Morning bro and sis            ";
console.log(greet.length);
var trimResult =  greet.trim();
console.log(trimResult.length);

console.log("=============================includes()===========================");
var greet="Good Morning bro and sis";
console.log(greet.includes("bro"));
console.log("==================================subString()================================");
var greet="Good Morning bro and sis";
console.log(greet.substring(8));
console.log(greet.substring(13,17));
console.log("============================Slice()===========================");
var  greet="Good Morning bro and sis"
console.log(greet.slice(13));
console.log(greet.slice(13,17));
console.log("==============================Split()==============================");
var studentList="sunil | Anil | Andy |Tendy | Lata | sachin";
var spiltResult=studentList.split(" ");
console.log(spiltResult);
console.log("=================================================================");
var impQuote = `"Do or Die" this attitude is important for this training`;
console.log(impQuote);
console.log("============================================================");



var fName = "Virat";
var lName = "Kohli";

// First Name:${fName}  Last Name: ${lName} 
console.log(`First Name : ${fName} and Last Name: ${lName}`);

console.log("==============================================================");


var res = "Hey you are doing good keep it up";
var stepSplit =  res.split(" ");
console.log(stepSplit);
console.log(stepSplit.length);

console.log("==============================================================");































