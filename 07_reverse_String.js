var myName="sandipdan";
var lengthstr=myName.length-1;
var reverseStr="";
for (let index =lengthstr; index >=0; index--) {
    console.log(myName.charAt(index));
    reverseStr=reverseStr + myName.charAt(index);
}
console.log(reverseStr);

