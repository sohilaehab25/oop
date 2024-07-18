//constractor function contain instance property
const Person = function(fullName, bornYear){
    this.fullName = fullName;
    this.bornYear= bornYear;
}

const sohila = new Person('sohila', 2000)
console.log(sohila)