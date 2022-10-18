
console.log(" 1: ==================using the includes method to count the vowels===========================");
var string="I am very good IT Developer";
var vowelsLoweCase = "aeiou";
var vowelUpperCase = "AEIOU";
var vowelsCount=0;
for (let index = 0; index < string.length; index++) {
    var char=string.charAt(index);
    var isLowerAvailable = vowelsLoweCase.includes(char);
    var isUpperAvailable = vowelUpperCase.includes(char);
    if (isLowerAvailable || isUpperAvailable) {
        vowelsCount  = vowelsCount + 1;
        
        
    }
    
}
console.log(`Total Vowels count : ${vowelsCount}`);
console.log(" 2 : ===============================To print the cube of sum numnber from 1 to 5====================================");
   var sum =0;
for (let index = 1; index <=5; index++) {

    sum = sum+(index*index*index);
   
    
}
console.log("sum of cube numbers from 1 to 5 : "+sum);















console.log("=========================");
console.log(" 3:==========To find the odd charecter to do nat empty==============="); 
function oddPositionedChars(myString) {

  for (let index = 0; index < myString.length; index++) {
      var char=myString.charAt(index);
      if (index%2!=0 && char!=" ") {
          console.log(char);
          
      }

  }
}

oddPositionedChars("Hard work always pays back ");
oddPositionedChars("Soon i will be Angular IT Champ");