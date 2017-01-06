class Greeter {
    constructor(public greeting: string) { }
    greet() {
        console.log("mission successful !!");
        return "<h1>" + this.greeting + "</h1>";
    }
};

let greeter = new Greeter("Hellooooo, Quentin !");

document.body.innerHTML = greeter.greet();