//constractor function contain instance property
const Person = function(fullName, bornYear){
    this.fullName = fullName;
    this.bornYear= bornYear;

    //we can not make methods there becouse when we make the inistance of the constractor it must inhirit the method and we do not need the method in every object so we make prototype
}

//prototype function
Person.prototype.calcAge = function(){
    console.log(2024-this.bornYear);

};

const sohila = new Person('sohila', 2000)

console.log(sohila);

sohila.calcAge();

Person.prototype.isPrototypeOf(Person) //false
Person.prototype.isPrototypeOf(sohila) //true

