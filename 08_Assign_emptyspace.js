function reverseStringSpace(arg1) {
    var stringlength=arg1.length-1;
   var reverseString="";
   for (let index =stringlength ; index >=0; index--) {
      var reverse = arg1.charAt(index);
      if (reverse!=" ") {
        reverseString = reverseString + reverse;

      }
    
   }
    console.log(reverseString);
    
}
reverseStringSpace("Hard work always pays back");

reverseStringSpace("Soon i will be Angular IT Champ");


console.log("===================================================================");


// function reverseStringSpace(string){
//   var str =string;
//   var stringlength=str.length-1;
//   var reverseString="";
//   for (let index = stringlength; index>=0; index++) {
//     const element = array[index];
    
//   }


// }
// reverseStringSpace(("Hard work always pays back");
// reverseStringSpace("Soon i will be Angular IT Champ");


