
class Greeter {
    greeting: string;
    constructor( message: string ) {
        this.greeting = message;
    }
    greet() {
        return this.greeting;
    }
}
const greet = new Greeter("Hello there.");
const greeting = greet.greet();
