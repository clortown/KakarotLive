// Define global variables
const heartButton = document.getElementById('heart-button');
const heartButtonImg = document.getElementById('imgClickAndChange');
let numHearts = 0;
const kakarot = document.getElementById('kakarot');
let removeClass;


// Close ad banner
const closeAd = document.getElementById('close-ad');
closeAd.onclick = function () {
    document.getElementById('banner').style.top = 0;
}


// Decide on which click to choose random action, do action, and reset Kakarot's action
const doActionClick = 10;
const decideActionClick = doActionClick - 1;
const resetActionClick = 1;


// Set the heart counter to count hearts
document.getElementById('heart-counter').innerHTML = numHearts;


// Make mouse into pointer over buttons
function buttonFinger(element) {
    element.style.cursor = 'pointer';
}
closeAd.onmouseover = buttonFinger(closeAd);
heartButton.onmouseover = buttonFinger(heartButton);
document.getElementById('send').onmouseover = buttonFinger(document.getElementById('send'));


// Make Kakarot spin/jump

let heartButtonOn = true;

function kakarotAction(add) {
    kakarot.classList.add(add); // Adds the class to Kakarot's image, upon which the image animation happens
    // Background will automatically return to white but will not automatically remove added class
    heartButtonOn = false; // We want the number of hearts to not increase while Kakarot is doing his action
}

function kakarotReturn() {
    heartButtonOn = true; // Turn the button back on
    numHearts = 0; // Reset the number of hearts to 0
    kakarot.classList.remove(removeClass); //
    // Add and remove classes: https://stackoverflow.com/questions/507138/how-do-i-add-a-class-to-a-given-element

}

function randomActions() {
    chooseAction = Math.floor(Math.random() * 3);
    switch (chooseAction) {
        case 0:
            return "rotate-scale-down";
        case 1:
            return "slide-top";
        case 2:
            return "slide-top";
    }
}


// Heart button functionality
heartButton.onclick = function () {
    if (heartButtonOn) {
        numHearts++;
        // On the click before the action happens, decide the random action:
        document.getElementById('heart-counter').innerHTML = numHearts;
        if (numHearts === decideActionClick) {
            removeClass = randomActions();
        }
        // On the click when the action happens, the do action function runs,
        // then the return function runs after a delay of 1 second
        if (numHearts === doActionClick) {
            kakarotAction(removeClass);
            setTimeout(kakarotReturn, 700);
        }
    }
}

heartButton.onmousedown = function () {
    if (heartButtonOn) {
        // Only want the button to turn red on click when it's on
        heartButtonImg.src = 'resources/redheartbutton.png';
    }
}

heartButton.onmouseup = function () {
    heartButtonImg.src = 'resources/heartbutton.png';
}