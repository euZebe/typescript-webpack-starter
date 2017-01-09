import { Utils } from "./utils";



const tryInput = <HTMLInputElement> document.getElementById("try");
const checkButton = document.getElementById("checkButton");

checkButton.onclick = function () {
    console.log("clicked !" + tryInput.value);
};



// used to be check the displayed version is the current one
Utils.logCurrentTime();