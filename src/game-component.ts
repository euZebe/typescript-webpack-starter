import { Game } from "./game";
export class GameComponent {
    game: Game;

    tryInput: HTMLInputElement;
    triesField: HTMLElement;
    comparatorField: HTMLElement;
    checkButton: HTMLButtonElement;

    constructor(maxValue?: number) {
        this.game = new Game(maxValue);
        this.tryInput = <HTMLInputElement> document.getElementById("try");
        this.triesField = document.getElementById("tries");
        this.comparatorField = document.getElementById("comparator");
        this.checkButton = <HTMLButtonElement> document.getElementById("checkButton");
    }

    /**
     * launch comparison, update Comparator and Tries fields
     */
    checkValue(): void {
        const intTry = parseInt(this.tryInput.value);
        const compare = this.game.checkValue(intTry);

        this.displayComparator(compare);
        this.updateTries();
    }

    updateTries () {
        this.triesField.innerText = this.game.tries.toString();
    }

    displayComparator (compareValue) {
        if (compareValue === 0) {
            this.comparatorField.innerText = `Trouvé en ${this.game.tries.length} coups !`;
            this.checkButton.disabled = true;
        } else if (compareValue === 1) {
            this.comparatorField.innerText = "trop haut...";
        } else {
            this.comparatorField.innerText = "trop bas...";
        }
    }
}