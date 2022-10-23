function gradeSystem(score) {
    if (typeof score==='string' ) {
        console.log("invakid input in string format");
        
    }else
    if (score===null || score===undefined) {
        console.log("invalid input null or undefined");
        
    }else
   
   if (score<= 0 || score>= 100) {
    console.log("invalid score");
   }else if (score<35) {
        console.log("You are faild");
    }else if (score >=35 && score <60) {
        console.log("You are passed and  GRADE IS 'C'");
    }else if (score >=60 && score < 75) {
        console.log("You are passed and GRADE 'B'");
    }else if (score >=75 && score <= 90) {
        console.log("You are passed and GRADE 'A'");
    }else if (score >=90 && score <= 100) {
        console.log("You are passed and GRADE 'A+'");
    }else if (score >=35) {
        console.log("You are passed");
    }
    
}
gradeSystem(66);
gradeSystem(13);
gradeSystem("");
gradeSystem(98);

gradeSystem("Forty five score");
gradeSystem(35);
gradeSystem(75);
gradeSystem(null);
gradeSystem(undefined);
gradeSystem(-20);
gradeSystem(55);
gradeSystem(82);





