
console.log("=======================================================================");

function maleMarriageEligibility(gender,age,boyName){
var result=gender="Male" && age>=21
? `Hey ${boyName} you are eligible for marrige`:
`Not eligible for marrige`;
console.log("================================================");
console.log(result);


}
maleMarriageEligibility("Male",25,"Biligates");
maleMarriageEligibility("Male",17,"Stev Jobs");

console.log("=============================================================");

function femaleMarriageEligibility (gender,age,girlName){
   if (age>=18) {
        console.log(`Hey ${girlName} you are eligible for marrige`);
    } else {
        console.log(`Hey ${girlName} you are NOT eligible for marrige`);
    }
    return;
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");








































// function femaleMarriageEligibility (gender,age,girlName){
    

//     if(gender&& age >=18){
//         console.log("Hey ${girlName} you are eligible for Marriage");
//     }else{
//         console.log("Not eliogible for marriage");
//     }    
// }
// femaleMarriageEligibility("Female",16,"Jenifer");
// femaleMarriageEligibility("Female",27,"Malinda Gates");