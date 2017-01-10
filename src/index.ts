import { Utils } from "./utils";
import { GameComponent } from './game-component';

const gameComponent = new GameComponent();

const checkButton = <HTMLButtonElement> document.getElementById("checkButton");

checkButton.onclick = function () {
    gameComponent.checkValue();
};

// used to be check the displayed version is the current one
Utils.logCurrentTime();