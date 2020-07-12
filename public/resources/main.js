// Define global variables
const heartButton = document.getElementById('heart-button');
let numHearts = 0;
const kakarot = document.getElementById('kakarot');
let removeClass;

// Close ad banner
const closeAd = document.getElementById('close-ad');
closeAd.onclick = function() {
    document.getElementById('banner').style.top = 0;
}

// Decide on which click to choose random action, do action, and reset Kakarot's action
const doActionClick = 10;
const decideActionClick = doActionClick-1;
const resetActionClick = 1;

// Set the heart counter to count hearts
document.getElementById('heart-counter').innerHTML = numHearts;

// Make mouse into pointer over buttons
function buttonFinger(element) {
    element.style.cursor = 'pointer';
}
closeAd.onmouseover = buttonFinger(closeAd);
heartButton.onmouseover = buttonFinger(heartButton);

// Heart button functionality
heartButton.onclick = function() {
    numHearts++;
    document.getElementById('heart-counter').innerHTML = numHearts;
    if (numHearts === decideActionClick) {
        removeClass = randomActions();
    }
    kakarotAction(removeClass);
    kakarotReturn(removeClass);
    // Will eventually want to make this happen with an asynchronous function
}

heartButton.onmousedown = function() {
    heartButton.style.backgroundColor = 'red';
}

heartButton.onmouseup = function() {
    heartButton.style.backgroundColor = 'white';
}

// Make Kakarot spin/jump

function kakarotAction(add) {
    if (numHearts >= doActionClick) {
        numHearts = 0;
        heartButton.style.backgroundColor = 'blue';
        kakarot.classList.add(add);
        // Background will automatically return to white but will not automatically remove added class
    }
}

function kakarotReturn(remove) {
    if (numHearts === resetActionClick) {
        kakarot.classList.remove(remove);
        // Add and remove classes: https://stackoverflow.com/questions/507138/how-do-i-add-a-class-to-a-given-element
    }
}

function randomActions() {
    chooseAction = Math.floor(Math.random()*3);
    switch (chooseAction) {
        case 0:
            return "rotate-scale-down";
        case 1:
            return "slide-top";
        case 2:
            return "slide-top";
    }
}
