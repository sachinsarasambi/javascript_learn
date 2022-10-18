console.log("=====================================To  count total nu,mber of vowel===============================================");
var string = "Good Morning IT Champ";
var reslower = string.toLowerCase();
var count = 0;
for (let index = 0; index < string.length; index++) {
    var chr = reslower.charAt(index);

    if (chr == "a" || chr == "e" || chr == "i" || chr == "o" || chr == "u") {
            
        console.log(chr);
        count = count + 1;
    }
}
console.log("Count the vowel in : " + count);


    console.log("==============WAP of Count of charter in given string=================================");

    function vowel() {
        var string = "I love JavaScript don";
        var reslower = string.toLowerCase();
        var count = 0;
        for (let index = 0; index < string.length; index++) {
            var chr = reslower.charAt(index);
        
            if (chr == "a" || chr == "e" || chr == "i" || chr == "o" || chr == "u") {
                console.log(chr);
                count = count + 1;
            }
        }
        console.log("Count the vowel in : " + count);
        
    }
    vowel();


    console.log("==============================The sum of all numbers 1 to 10=====================================");
    var  sum=function () {
        var add=0;
        for (let index = 0; index <=10; index++) {
            add=add+index;
            console.log(add);
            }
        
    }
    sum();
    console.log("================================mumber of squre=====================================================");

    // for (let index = 1; index <=5; index++) {
    //   res=index*index;
    //   console.log(res);
        
    // // }
    function squre1(arg) {
        var sum=0;
        for (let index = 1; index <=arg; index++) {
           sum=sum+(index*index);
        }
        return sum;
        
    }
    console.log(squre1(10));

  console.log("====================To find the Even charecter to do nat empty================");

  function evenPositionedChars(myString) {

    for (let index = 0; index < myString.length; index++) {
        var char=myString.charAt(index);
        if (index%2==0 && char!=" ") {
            console.log(char);
            
        }

    }
}

  evenPositionedChars("Hard work always pays back ")
  evenPositionedChars("Soon i will be Angular IT Champ")


  console.log("==========To find the odd charecter to do nat empty==============="); 
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

console.log("=============================================================================================");




  














