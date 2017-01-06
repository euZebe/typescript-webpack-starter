export class Person {
    constructor(public firstName: String, public lastName: String) {
        console.log(`new person added: ${firstName} ${lastName}`);
    }

    toString(): String {
        return `${this.firstName} ${this.lastName}`;
    }
}