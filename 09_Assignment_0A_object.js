let teacher = {
    name: "Kapil jondale",
    Age:31,
    Mobile_No:7387139453,
    PinCode:411057,

    degrees :{
        engineering:"CSS",
        PHD:"Adv Computting",
        MBA:"Markting"
    },
    certificates:{
        certificates1:"Hacker Rank",
        certificates2:"IFE Course",
        certificates3:"Adv Programming",

    },
    concatdegrees: function(){
        let totaldegree = `Total degree are : ${teacher.degrees.engineering}, ${teacher.degrees.PHD},${teacher.degrees.MBA} `;
        return totaldegree;
    }

}
console.log("-----------------------------------");
console.table(teacher);
console.log("-----------------------------------");
console.log(teacher.concatdegrees());
console.log("-----------------------------------");
teacher.teacherweight=60
console.table(teacher);

console.log("-----------------------------------");
teacher.teacherweight=80
console.table(teacher);

delete teacher.certificates.certificates1
console.table(teacher);

teacher.certificates.certificates4="National level codding certificate"
console.table(teacher);
console.log("==============================");
console.table(teacher);

console.table(teacher.certificates);
console.log("======================================================================");

console.table(Object.keys(teacher));
console.log("======================================================================");
console.table(Object.values(teacher));
