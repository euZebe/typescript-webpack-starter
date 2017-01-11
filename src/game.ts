export class Game {

    tries: number[];
    private numberToFind: number;

    /**
     * initialize a Game with the given max value (optional parameter ; if not defined, default value is 10)
     */
    constructor(max: number = 10) {
        this.tries = [];
        this.generateNumber(max);
    }

    // set the numberToFind
    private generateNumber(max: number): void {
        this.numberToFind = Math.floor((Math.random() * max) + 1);
    }

    /**
     * check the tried value, and add it to the array of tries.
     * @returns 0 if the tried value equals the numberToFind
     *          a positive number if the tried value is lower than the numberToFind
     *          a negative number if the tried value is greater than the numberToFind
     */
    checkValue(tryValue: number): number {
        this.tries.push(tryValue);
        return tryValue - this.numberToFind;
    }
}