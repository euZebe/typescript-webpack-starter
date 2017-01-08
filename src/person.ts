import { Species } from "./species";
export class Person {

    public imageURL: String;

    constructor(public kind: Species, public firstName: String, public lastName?: String) {
        this.lastName = lastName || ""; // lastName will never be undefined
    }

    toString(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    asListItemNode(): Node {
        const result = document.createElement("li");
        const content = document.createTextNode(this.toString());
        result.appendChild(content);
        return result;
    }

    asDetailNode(): Node {

        const xmlString =
            `<div class="card">
                <img src=${this.imageURL}>
                <div>
                    <label>First name: ${this.firstName}</label>
                    <label>Last name: ${this.lastName}</label>
                    <label>Kind: ${this.kind}</label>
                </div>
            </div>`;
        const parser = new DOMParser();
        const doc = parser.parseFromString(xmlString, "text/html");
        return doc.firstChild;
    }
}