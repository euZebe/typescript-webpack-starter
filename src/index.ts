import { Person } from './person';

class Greeter {
    constructor(public greeting: string) { }
    greet() {
        console.log("mission successful !!");
        return "<h1>" + this.greeting + "</h1>";
    }
};

const greeter = new Greeter("Hellooooo, Quentin !");

document.body.innerHTML = greeter.greet();

const person = new Person("James", "Bond");
document.body.innerHTML += person.toString();