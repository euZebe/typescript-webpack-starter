import { Person } from "./person";
import { Species } from "./species";

export class PersonGenerator {

    static generate(): Person[] {
        const person1 = new Person(Species.fox, "Armand", "Raynal de Maupertuis");

        const person2 = new Person(Species.rabbit, "Eusèbe");

        const person3 = new Person(Species.dog, "Don Lope", "de Villalobos y Sangrin");
        person3.imageURL = "http://www.decape.askell.com/Persos/Lope2.gif";

        const person4 = new Person(Species.human, "Raïs Kader");

        return [person1, person2, person3, person4];
    }
}