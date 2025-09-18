let person = {
  name: "Praveen",
  age: 21,
  greet: function() {
    return "Hello, my name is " + this.name;
  }
};

console.log(person.greet()); 
