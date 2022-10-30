console.log("==========================Object clonnig And Traversing==========================");
let bank_sbi = {
    bank_name:"Union bank of india",
    Manager_name:"S.b.tawade",
    contact_no:+7387139453,
    bank_time : "10:00am To 05:00pm"
}

let bank_location = {
    street:"pandharapur road",
    city:"Solapur",
    pinCode:"413308",
    state:"Maharashtra"
}

let bank_sbi_details = Object.assign({},bank_sbi,bank_location)

console.log(`1. Using string template result ${bank_sbi_details}`); 

console.warn("====================== Using the  Object.assign () Method  =================================");
console.log(bank_sbi_details);

 let bank_detail={...bank_sbi,...bank_location}

console.warn("===================== Using the Spared Operator {...} ==================================");

console.log(bank_detail);

let rate_of_interest ={
    home_lone_interest : "8.5%",
    personal_lone_interest: "13%",
    due_interest:"1%"
}

 let bank_details={...bank_sbi,...bank_location,...rate_of_interest}

 console.warn("===================== Marge Step-1,Step-2,Step-3 Bank Details ==================================");
 console.log(bank_details);

 console.warn("===================== Traverse by using For in Loop the Bank Details ==================================");
 
 for (const key in bank_details) {
     if (Object.hasOwnProperty.call(bank_details, key)) {
         const element = bank_details[key];
         console.log(`${key} : ${element}`);

   }
}