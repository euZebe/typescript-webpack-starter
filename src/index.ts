class Greeter {
    constructor(public greeting: string) { }
    greet() {
        console.log('mission done !!')
        return "<h1>" + this.greeting + "</h1>";
    }
};

var greeter = new Greeter("Hellooooo, Quentin !");
    
document.body.innerHTML = greeter.greet();