export class Person {
    constructor(public firstName: String, public lastName?: String) {
        this.lastName = lastName || ""; // lastName will never be undefined
    }

    toString(): String {
        return `${this.firstName} ${this.lastName}`;
    }

    asListItem(): String {
        return `<li>${this.toString()}</li>`;
    }
}