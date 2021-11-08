let cards = document.querySelectorAll(".card");
let endGameCheck = document.querySelectorAll(".flip");

let numberOfCards = 0;
let card1, card2;
let playerFlippedCard = false;
let blockFlipCards = false;
let randomPosition = 0;
let numberOfMoves = 0;

let seconds = 00;
let tens = 00;
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let interval;

function flip (cardToFlip) {
    if (blockFlipCards) return;
    if (cardToFlip === card1) return;

    cardToFlip.classList.add("flip");

    if (!playerFlippedCard) {
        playerFlippedCard = true;
        card1 = cardToFlip;    
        interval = setInterval(startTimer, 10);    
    
    } else {
        playerFlippedCard = false;
        card2 = cardToFlip;
    }

    if (card1.firstElementChild.innerHTML === card2.firstElementChild.innerHTML) {
       rightCards ();
       
    } else {
        blockFlipCards = true;
        
        setTimeout (wrongCards, 1500);
    }
}

function rightCards () {
    numberOfMoves++;
    endGameCheck = document.querySelectorAll(".flip");
    
    if (endGameCheck.length === numberOfCards) {
        setTimeout (youWon, 500);

    } else {
        card1.removeAttribute("onclick");
        card2.removeAttribute("onclick");
        
        card1 = null;
        card2 = null;
    }
}

function wrongCards () {
    numberOfMoves++;

    card1.classList.remove("flip");
    card2.classList.remove("flip");

    card1 = null;
    card2 = null;

    blockFlipCards = false;
}

function randomCardsPosition () {
    randomPosition = Math.floor(Math.random() * numberOfCards);
}

function youWon () {
    alert(`CONGRATULATIONS!!! YOU WON!!!
    \n\rYou nailed it in ${seconds} seconds and ${tens} tens of seconds.
    \n\rIt took ${numberOfMoves} moves to win!`);

    let playAgain = prompt("Do you want to smash this game again?");
    playAgain = playAgain.toLowerCase();

    if (playAgain === "yes") {
        document.location.reload(true);
    }
}

function startTimer() {
    tens++;

    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }


}

function main () {
    numberOfCards = parseInt(prompt ("How many cards do you want to play with?"));

    if (isNaN(numberOfCards) || numberOfCards < 4 || numberOfCards > 14 || numberOfCards % 2 !== 0) {
        alert ("You must select a even number of cards between 4 and 14!");
        main();

    }
    else {
        for (let i = 13; i > numberOfCards - 1; i--) {
            cards[i].remove();
        }

        for (i = 0; i < numberOfCards; i++) {
            randomCardsPosition();

            cards[i].style.order = randomPosition;
        }
    }
}

main();