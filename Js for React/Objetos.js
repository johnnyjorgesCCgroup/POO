/*console.log('Hola Mundo')

function hello(name){
    return "Hola " + name
}

const result = hello("Johnny")
console.log(result)

class Numero{
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
      }
    Sumar(){

        if(this.c === undefined){
            this.c = 0
        }
        return this.a + this.b + this.c
    }
}

const num = new Numero(10,10);
const num2 = new Numero(10,10,2000);

console.log(num.Sumar())
console.log(num2.Sumar())

class user {
  constructor() {
    this.name = "ryan";
    this.lastname = "perez";
    this.age = 30;
    (this.address = {
      country: "Colombia",
      city: "Bogota",
      street: "main street 123",
    }),
      (this.friends = ["brandon", "elena"]);
    this.active = true;
  }
}

const user1 = new user();
console.log(user1);*/

class User {
    constructor(name, lastname, age, address, friends, active) {
        this.name = name || "Ryan"; // Utilizo el operador OR para proporcionar un valor predeterminado si no se proporciona
        this.lastname = lastname || "Perez";
        this.age = age || 30;
        this.address = address || {
            country: "Colombia",
            city: "Bogota",
            street: "main street 123"
        };
        this.friends = friends || ["Brandon", "Elena"];
        this.active = true;
    }
    sendEmail(){
        return "sending email" + " " + this.name + " " + this.lastname
    }
}

// Crear una nueva instancia de User
const newUser = new User("johnny");

// Imprimir la nueva instancia
console.log(newUser);

