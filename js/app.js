const cards = document.querySelectorAll('.card');
const scoreEl = document.querySelector('.score');

/*  (2) so for this i need some basic variables */

let hasFlippedCards = false;
let firstCard, secondCard; /* so we should know weather we clicking the first card or second  */
let lockBoard = false;  /* lockboard means when i clicked both the card the lockboard will apply */
let score = 0;

/*  (1) using this fuction when someone clicks on the card the card will get flipped  */
function flipCard(){
    if(lockBoard) return;  /* so when lockboard is true it will return  */
    console.log('i am clicked');
    console.log(this);
    this.classList.toggle('flip');

    if(hasFlippedCards == false){
        hasFlippedCards = true;
        firstCard= this;

        console.log(hasFlippedCards,firstCard);
        return;
    }

    hasFlippedCards= false;
    secondCard= this;
    console.log(hasFlippedCards,secondCard);
    console.log(firstCard.dataset.name);
    console.log(secondCard.dataset.name);
    console.log(hasFlippedCards,secondCard);

    checkForMatch();

}

function checkForMatch(){
    if(firstCard.dataset.name== secondCard.dataset.name){
        disableCards();
        updateScore();
    }
    else{
        unFlipCards();

    }
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
    resetBoard();

}

function unFlipCards(){
    lockBoard= true;
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    },1000)
}
/*   ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????  */

    function resetBoard(){
        [hasFlippedCards,lockBoard] = [false,false];
        [firstCard,secondCard] = [null,null]
    }

function updateScore(){
    score++
    scoreEl.textContent= score;
}

/* Ffirst*/
    (function shuffle(){
        cards.forEach(card=>{
            let randomPos= Math.floor(Math.random()*10);
            card.style.order= randomPos;          /* its a property of css flex*/

        })
    })();


function playagain(){
    resetBoard();

score=0;
scoreEl.textContent=score;    



cards.forEach(card=>{
    card.classList.remove('flip');
    card.addEventListener('click', flipCard);
});
cards.forEach(card=>{
    let randomPos=Math.floor(Math.random()*10);
    card.style.order= randomPos
});
}
cards.forEach(card=> card.addEventListener('click',flipCard));

