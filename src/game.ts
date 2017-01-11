export class Game {

    tries: number[];
    private numberToFind: number;

    /**
     * initialize a Game with the given max value (optional parameter ; if not defined, default value is 10)
     */
    constructor(max: number = 10) {
        this.tries = [];

        // Step#1 appeler generateNumber pour initialiser la partie
    }

    // set the numberToFind
    private generateNumber(max: number): void {
        this.numberToFind = Math.floor((Math.random() * max) + 1);
    }

    /**
     * check the tried value, and add it to the array of tries.
     * @returns 0 if the tried value equals the numberToFind
     *          1 if the tried value is lower than the numberToFind
     *         -1 if the tried value is greater than the numberToFind
     */
    checkValue(tryValue: number): number {

        // Step#4: ajouter la valeur saisie à la liste des nombres déjà saisis

        /**
         * Step#2: définir une variable de type number qui va recevoir:
         * une valeur négative si le nombre saisi est inférieur à celui recherché
         * 0 si le nombre saisi est égal à celui recherché
         * une valeur positive si le nombre saisi est supérieur à celui recherché
         * 
         * retourner cette variable
        */
    }
}