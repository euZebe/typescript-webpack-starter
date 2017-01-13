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
        // Step#2 instanciate game attribute ; check in chrome debugger that you enter Game constructor


        this.tryInput = <HTMLInputElement> document.getElementById("try");
        this.checkButton = <HTMLButtonElement> document.getElementById("checkButton");
        this.comparatorField  = document.getElementById("comparator");
        this.triesField = document.getElementById("tries");
    }

    /**
     * launch comparison, update Comparator and Tries fields
     */
    checkValue(): void {
        // Step#5 get value of tryInput attribute
        
        // Step#6 call checkValue method of game attribute ; check in chrome debugger that you enter checkValue method of Game class

        // Step#8 call displayComparator method which takes the result of game.checkValue() as an input parameter

        // Step#11 call updateTries ; check result in the web page
    }

    // Step#10 create a method called updateTries, which update triesField

    // Step#9 implement the method ; check in the web page that the expected info message is displayed
    displayComparator(compareValue): void {
        // if compareValue equals 0...
        // update comparatorField with message `Trouvé en ${this.game.tries.length} coups !`
        // ... and deactivate checkButton

        // else if compareValue is positive
        // update comparatorField with message saying that the number is too high

        // else (if compareValue is negative)
        // update comparatorField with message saying that the number is too low
        }
    }
}