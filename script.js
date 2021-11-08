let cards = document.querySelectorAll(".card");
console.log(cards);

let card1, card2;
let playerFlippedCard = false;
let blockFlipCards = false;

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
    
    console.log("end flip function");
}

function rightCards () {

    card1.removeAttribute("onclick");
    card2.removeAttribute("onclick");

    card1 = null;
    card2 = null;
    
    console.log("It IS a match!");
}

function wrongCards () {
    card1.classList.remove("flip");
    card2.classList.remove("flip");

    card1 = null;
    card2 = null;
    console.log("It is NOT a match!");

    blockFlipCards = false;
}

function randomCards () {

}

function main () {
    const numberOfCards = parseInt(prompt ("How many cards do you want to play with?"));
    
    if (isNaN(numberOfCards) || numberOfCards < 4 || numberOfCards > 14 || numberOfCards % 2 !== 0) {
        alert ("You must select a even number of cards between 4 and 14!");
        main();

    } else {
        alert ("OK");

        for (let i = 13; i < 12 - numberOfCards; i--) {
            cards.pop();
        }


    }

    console.log(cards);
}

main();