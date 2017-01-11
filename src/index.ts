import { Utils } from "./utils";

// Step#1 instancier un GameComponent
const gameComponent = ...

const checkButton = <HTMLButtonElement> document.getElementById("checkButton");
const tryInput = <HTMLInputElement> document.getElementById("try");


tryInput.onkeypress = function(event) {
    if (event.keyCode === 13) { // when Enter is pressed
        // Step#2: appeler gameComponent.checkValue()
    }
};

// gives choice on how to submit value ; press Enter / click button
checkButton.onclick = function () {
        // Step#2: appeler gameComponent.checkValue()
};


// used to be check the displayed version is the current one
Utils.logCurrentTime();