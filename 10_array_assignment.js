console.log("========================Given Array================================");
var arrayofNames = ['Kamat' ,'Memon' ,'Nashpati' ,'Taimur' ,'Memon' ,'Kamat' ,'Andy' ,'Taimur'];
 console.log("Given Array: " +arrayofNames);

 console.log("=========================Removethe duplicate names==============================");
  var removeDuplicate_ele=new Set(arrayofNames);
  console.log(removeDuplicate_ele);

  console.log("=========================Count duplicate value =============================");
  var Givenarry_count=arrayofNames.length
 console.log("Count the all duplicate valuve: "+Givenarry_count);


 console.log("=============================Count all Duplicate element==========================================");
 var  countduplicate_element=removeDuplicate_ele.size
 console.log("Count Duplicate element :"+countduplicate_element);

 console.log("================how many Duplicate element are removed=====================================");
var countremoveduplicate_ele = Givenarry_count-countduplicate_element
console.log("Duplicate element are removed : "+countremoveduplicate_ele);
console.log("===========================Total number of unique element======================================");

console.log("Total number of  unque ele : "+countduplicate_element);