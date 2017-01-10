import { Utils } from "./utils";
import { GameComponent } from './game-component';

const gameComponent = new GameComponent();

const checkButton = <HTMLButtonElement> document.getElementById("checkButton");
const tryInput = <HTMLInputElement> document.getElementById("try");


tryInput.onkeypress = function(event) {
    if (event.keyCode == 13) { // when Enter is pressed
        gameComponent.checkValue(); // check value
    }
}

// gives choice on how to submit value ; press Enter / click button
checkButton.onclick = function () {
    gameComponent.checkValue();
};


// used to be check the displayed version is the current one
Utils.logCurrentTime();