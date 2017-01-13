export class Game {

    tries: number[];
    private numberToFind: number;

    /**
     * initialize a Game with the given max value (optional parameter ; if not defined, default value is 10)
     */
    constructor(max: number = 10) {
        this.tries = [];

        // Step#3 call generateNumber to initialize a game ; check in chrome debugger that numberToFind is initialized
    }

    // set the numberToFind
    private generateNumber(max: number): void {
        this.numberToFind = Math.floor((Math.random() * max) + 1);
    }

    /**
     * check the tried value, and add it to the array of tries.
     * @returns 0 if the tried value equals the numberToFind
     *          a negative number if the tried value is lower than numberToFind
     *          a positive number if the tried value is greater than numberToFind
     */
    checkValue(tryValue: number): number {

        // Step#?: ajouter la valeur saisie à la liste des nombres déjà saisis

        /**
         * Step#7: define a variable which gets 
         * a negative value if tryValue is lower than the numberToFind
         * 0 if both values are equal
         * a positive value if tryValue is greater than the numberToFind
         * 
         * return this value ; check in chrome debugger that you the returned value has the expected result
        */
        return 0; // to be removed when method is implemeted
    }
}