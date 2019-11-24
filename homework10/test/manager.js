const Manager = require("/lib/Manager");
const Employee = require(/lib/Employee");
​
var inquirer = require('inquirer');
​
inquirer
  .prompt([
    what is your email?
  ])
  .then(answers => {
    
  });     
  
  test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
  });
  
  test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });
​
​
  class Employee {
    constructor(sound) {
      this.name = "Baraka";
      this.email = "coolbarak@gmail.com";
      this.id = 464639;
​
      
    }
    displayAnimalInfo() {
      console.log(
        `${this.name} name ${this.email}, email ${this.id}, id ${this.tailString}.`
      );
    }
  }
​
  class Intern extends Employee {
  constructor(name) {
    const sound = "Meow";
    super(sound);
    this.name = name;
  }
}
​
class engineer extends Employee {
  constructor(name) {
​
​
    github // GitHub username
​
getGithub()
​
getRole() // Overridden to return 'Engineer'
    
    super(sound);
    this.name = name;
    this.email= "0";
  }
}
​
class Manager extends Employee {
  constructor(name) {
​
    officeNumber
​
getRole() // Overridden to return 'Manager'
    super;
    this.name = name;
  }
}
​
const Baraka = new Manager("Baraka");
const Hamza = new engineer("Hamza");
const Abdul = new employee("Abdul");
const Bashir = new Intern ("Bashir");
rando.displayAnimalInfo();