import { Game } from "./game";

/**
 * cette classe est la représentation graphique d'une partie de Nombre Mystère.
 * Elle gère les interactions entre le modèle (l'instance de Game) et l'IHM (index.html)
 */
export class GameComponent {
    game: Game;

    tryInput: HTMLInputElement;
    triesField: HTMLElement;
    comparatorField: HTMLElement;
    checkButton: HTMLButtonElement;

    constructor(maxValue?: number) {
        // Step#1 instancier l'attribut game

        // Step#2 instancier tryInput en récupérant le composant HTML par son identifiant
        
        // Step#2 instancier checkButton en récupérant le composant HTML par son identifiant
        
        // Step#3 instancier comparatorField en récupérant le composant HTML par son identifiant

        // Step#4 instancier triesField en récupérant le composant HTML par son identifiant
    }

    /**
     * launch comparison, update Comparator and Tries fields
     */
    checkValue(): void {
        // Step#2 récupérer la valeur du champ tryInput
        
        // Step#2 appeler la méthode checkValue de game

        // Step#3 appeler la méthode displayComparator qui prend en parametre un le retour de game.checkValue()

        // Step#4 appeler la méthode updateTries 
    }

    // Step#4 créer une méthode updateTries qui met à jour le champ triesField

    // Step#3 implémenter la méthode
    displayComparator(compareValue): void {
        // si compareValue vaut 0...
        // mettre à jour le champ comparatorField avec le message `Trouvé en ${this.game.tries.length} coups !`
        // ... et désactiver le bouton

        // sinon, si compareValue est positive
        // mettre à jour le champ comparatorField avec un message indiquant que le nombre saisi est trop grand

        // sinon (si compareValue est négative)
        // mettre à jour le champ comparatorField avec un message indiquant que le nombre saisi est trop bas
        }
    }
}