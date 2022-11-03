 class Person {
    constructor(Full_nmae,city,age,gender){
        this.Full_nmae=Full_nmae;
        this.city=city;
        this.age=age;
        this.gender=gender;
    }
    details(){
        console.log(`Person Details: ${this.Full_nmae} ${this.city} ${this.age} ${this.gender} `);
    }
 }
  let personAnil=new Person("Anil mohite","pune",31,"male");
  let personAnkita= new Person("Ankita patil","sangola",23,"female");
  let personmodi=new Person("narendr modi","Ahmadabad",76,"male");

  const array=[personAnil , personAnkita , personmodi];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //the person details whoes age more than 50
    if (element.age>=50) {
        console.log(` ${element.Full_nmae} ${element.city} ${element.age} ${element.gender}`);
        
    }

    
  }


  for (const Person of array) {
    console.log(Person);
    
  }
  console.log("==============================================");

  for (const person of array) {
    console.log(person.Full_nmae);
    
  }
  console.log("==============================================");
  for (const person of array) {
    console.log(person.details());
    
  }
  console.log("==============================================");

  for (const person of array) {
    if(person.age>=50) {
        console.log(` ${person.fullName}  ${person.city}  ${person.age} ${person.gender}  `);
    }
}
