console.log("====================================================");


function reverseString(arg1) {

    var strlen=arg1.length;
    var reverseStr="";
    for (let i =strlen; i>=0 ; i--) {
        console.log(arg1.charAt(i));
        reverseStr=reverseStr+arg1.charAt(1);
      
        
    }
    console.log(reverseStr);



    
}
console.log("========================================================");
reverseString("Hard work always pays back");
console.log();
console.log("===============================================================");
reverseString("Soon i will be Angular IT Champ");
