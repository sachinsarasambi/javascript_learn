const mohitPerson ={
    FullName :"sachin tendulakar",
    age:30,
    "isMarried":true
}
for (const key in mohitPerson) {
    if (Object.hasOwnProperty.call(mohitPerson, key)) {
        const element = mohitPerson[key];
        console.log(element);
        
    }
}