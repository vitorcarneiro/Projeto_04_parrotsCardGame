let cards = document.querySelectorAll(".card");
let endGameCheck = document.querySelectorAll(".flip");

let numberOfCards = 0;
let card1, card2;
let playerFlippedCard = false;
let blockFlipCards = false;
let randomPosition = 0;
let numberOfMoves = 0;

function flip (cardToFlip) {
    console.log(blockFlipCards);
    if (blockFlipCards) return;
    if (cardToFlip === card1) return;

    cardToFlip.classList.add("flip");

    if (!playerFlippedCard) {
        playerFlippedCard = true;
        card1 = cardToFlip;        
    
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

    console.log(`numberOfMoves = ${numberOfMoves}`);
    console.log("end flip function");
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
        
        console.log("It IS a match!");
        
        console.log(endGameCheck);
        console.log(endGameCheck.length);
    }

}

function wrongCards () {
    numberOfMoves++;

    card1.classList.remove("flip");
    card2.classList.remove("flip");

    card1 = null;
    card2 = null;
    console.log("It is NOT a match!");

    blockFlipCards = false;
}

function randomCardsPosition () {
    randomPosition = Math.floor(Math.random() * numberOfCards);
    console.log(`randomPosition = ${randomPosition}`);
}

function youWon () {
    alert (`YOU WON!!!\n\rYou nailed it in ${numberOfMoves} moves!`);

}

function main () {
    numberOfCards = parseInt(prompt ("How many cards do you want to play with?"));

    if (isNaN(numberOfCards) || numberOfCards < 4 || numberOfCards > 14 || numberOfCards % 2 !== 0) {
        alert ("You must select a even number of cards between 4 and 14!");
        main();

    }
    else {
        console.log("OK");
        console.log(`numberOfCards = ${numberOfCards}`);
        for (let i = 13; i > numberOfCards - 1; i--) {
            cards[i].remove();
        }

        for (i = 0; i < numberOfCards; i++) {
            console.log("entrou");
            console.log(i);

            randomCardsPosition();

            cards[i].style.order = randomPosition;
            console.log(cards[i].style.order);
            console.log("fechou");
        }
    }

}

main();