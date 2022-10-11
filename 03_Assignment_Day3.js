//Funcation Expression 
var squre =function (a) {
    console.log(a*a);
}
squre(5);
squre(6)
squre(25)
squre(100)
console.log("===========================================================================");
 
console.log("Type  of funcation:" ,typeof squre);
console.log("===========================================================================");

var area=function (a1,a2) {
    console.log("Area of tringle:",(a1*a2)/2);
    
}
area(45,34)
console.log("===========================================================================");

var rectangle=function (length,width) {
    console.log("Area of REctangle:" ,length*width);
    
}
rectangle(499,917)
console.log("===========================================================================");

function swap_values(x,y) {
    console.log("Befor swap values===",x,y)

    var temp;
    temp=x;
    x=y;
    y=temp;
    console.log("After swapping values===",x,y);

    
}
swap_values("Virat","Aunshka");
swap_values(1000,2000)
console.log("============================================================");



var string_m = function(string){
console.log(string.length);
console.log(string.indexOf("s"));
console.log(string.indexOf("lang"));
console.log(string.charAt(string.length-1));
console.log(string.charAt(string.length-3));


}
string_m("javaScript the most popular language");






 










