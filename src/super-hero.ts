import { Person } from './person';

export class SuperHero extends Person {

    public superPower: String;

        asDetailNode(): Node {

        const xmlString =
            `<div class="card">
                <img src=${this.imageURL}>
                <div>
                    <label>First name: ${this.firstName}</label>
                    <label>Last name: ${this.lastName}</label>
                    <label>Kind: ${this.kind}</label>
                    <label>Super power: ${this.superPower}</label>
                </div>
            </div>`;
        const parser = new DOMParser();
        const doc = parser.parseFromString(xmlString, "text/html");
        return doc.firstChild;
    }

}