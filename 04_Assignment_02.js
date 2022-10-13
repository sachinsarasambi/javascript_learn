var stringHandson=function(){
    var string="    Hey tou are doing good ,keep it up   ";
    console.log("Given string :"+string);
    console.log("====================================================");
    console.log("Calculate the string length:  "+string.length);
    console.log("================================================================");
    console.log("Removing the space:  "+string.trim());
    console.log("=========================================================================");
    console.log("after removed space(trim) length: " + string.trim().length);
    console.log("extra spaces count :" + (string.length-string.trim().length));
    console.log("=========================================================================");
    console.log("First charecter after trim:"+string.trim().charAt(0));
    console.log("Last charecter after trim:"+string.trim().charAt(string.trim().length-1));
    console.log("=====================================count on total word after 3 steps ========================================");
    // var split=string.trim().split(" ");
    console.log(string.trim().split(" ").length);

    console.log("===================indexof==============================");
    console.log(string.trim().indexOf("good"));

    console.log("====================Substring=============================");
    console.log(string.trim().substring(22));

    console.log("=======================Slince ===============================");
    console.log(string.trim().slice(22));
    console.log("==========================string ends with word================================");

    console.log(string.trim().includes("up"));

    console.log("================starting start wuth 'hey' word=========================");

    console.log(string.trim().includes("Hey"));
}

stringHandson();