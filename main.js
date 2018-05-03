var bombNumber = '' //explosion number
var range = [0, ' - ', 100]
var numRange = ''

$(document).ready(() => {
    setNumber();
    $('#guess').keypress(function (e) {
        if (e.which == 13) {
            $('.checkButton').click();
        }
    })
});


let setNumber = () => {
    bombNumber = Math.floor(Math.random() * 101)
}

let inputRange = (oldString) => {
    numRange = oldString.replace(/,/g, '')
    console.log (numRange)
}

let updateGuessRange = () => {
    let oldString1 = range.toString();
    inputRange(oldString1);
    return numRange;
}

let clearInputBox = () => {
    document.getElementById('guess').value = ''
}

let bomb = new Audio('Grenade+4.mp3');

let nextGuess = () => {
    clearInputBox();
    document.getElementById('showRange').innerHTML = updateGuessRange();
}

let numCheck = () => {
    num = document.getElementById('guess').value;
    if (isNaN(num)) {
        alert('Remember the answer has to be a number');
        clearInputBox();
    } else if (num < range[0]) {
        alert('You are out of the area code, please come back.');
        nextGuess()
    } else if (num > range [2]) {
        alert('You are out of the area code, please come back.');
        nextGuess()
    } else if (num < bombNumber) {
        alert('You are SAFE!');
        range[0] = Number(num);
        nextGuess()
    } else if (num > bombNumber) {
        alert('You are SAFE!');
        range[2] = Number(num);
        nextGuess();
    } else if (num = bombNumber) {
        bomb.play();
        alert('uh-oh......');
        range = Number(num);
        nextGuess();
    }
}

let resetGame = () => {
    setNumber();
    range = [0, ' - ', 100];
    nextGuess();
}