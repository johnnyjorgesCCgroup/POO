class Person {
    constructor(name, lastname) {
      this.name = name;
      this.lastname = lastname;
    }
  }
  
  class Programmer extends Person {
    constructor(language, name, lastname) {
      super(name, lastname);
      this.language = language;
    }
  }
  
  const john = new Person("John", "Ray");
  const ryan = new Programmer("Javascript", "ryan", "ray");
  
  console.log(john);
  console.log(ryan);
  
  //subtipo
  
  function writeFullName(p) {
    console.log(p.name + " " + p.lastname);
  }
  
  writeFullName(john);
  writeFullName(ryan);
  