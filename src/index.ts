import { Person } from './person';

const person1 = new Person("Armand", "Raynal de Maupertuis");
document.body.innerHTML += person1.asListItem();

const person2 = new Person("Eusèbe");
document.body.innerHTML += person2.asListItem();

const person3 = new Person("Don Lope", "de Villalobos y Sangrin");
document.body.innerHTML += person3.asListItem();