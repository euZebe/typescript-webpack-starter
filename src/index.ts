import { PersonGenerator } from "./persons-generator";
import { Utils } from "./utils";



const listOfPersonsNode = document.getElementById("listOfPersons");

const persons = PersonGenerator.generate();
persons
    .map(p => p.asListItemNode())
    .forEach(childNode => listOfPersonsNode.appendChild(childNode));
/* 
Could also be written as:
    listOfPersonsNode.appendChild(persons[0].asListItemNode())
    listOfPersonsNode.appendChild(persons[1].asListItemNode())
    listOfPersonsNode.appendChild(persons[2].asListItemNode())
    listOfPersonsNode.appendChild(persons[3].asListItemNode())

*/

document.body.appendChild(persons[2].asDetailNode());

// used to be check the displayed version is the current one
Utils.logCurrentTime();