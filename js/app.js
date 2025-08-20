const cards = document.querySelectorAll('.card');
const scoreEl = document.querySelector('.score');
const attemptsEl = document.querySelector('.Attempts');
const messageEl = document.querySelector('.message-box')

/*  (2)  */

let hasFlippedCards = false;
let firstCard, secondCard; /*   */
let lockBoard = false;  /* lockboard means when i clicked both the card the lockboard will apply */
let score = 0;
let attempts =0;
const maxAttempt =4;

/*  (1) using this fuction when someone clicks on the card the card will get flipped  */
function flipCard(){
    if(lockBoard) return;  /* so when lockboard is true it will return  */
    console.log('i am clicked');
    console.log(this);
    this.classList.toggle('flip');


    if(hasFlippedCards == false){
        hasFlippedCards = true; /*it marks the first card of a paired as flipped and stores it fisrtCard so later it can be compared with the second */
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
        checkWin();
    }
    else{
        wrongAttempt();
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
function wrongAttempt(){
    attempts++;
    attemptsEl.textContent= attempts;
    if (attempts>=maxAttempt){
        setTimeout (()=> messageEl.innerText = "Game Over! You reached 4 wrong attempts.", 500);
        lockAllCards();
    }
}
function checkWin(){
    if(score === cards.length / 2){
        setTimeout (()=> messageEl.innerText ="Congratulations! You Win!!.", 500);

    }
}
/* to stop the player click any cards*/
function lockAllCards(){
    cards.forEach(card => card.removeEventListener('click', flipCard));
}

/* Ffirst*/
    (function shuffle(){
        cards.forEach(card=>{
            let randomPos= Math.floor(Math.random()*10);
            card.style.order= randomPos;          /* its a property of css flex*/

        });
    })();


function playagain(){
    resetBoard();
    score=0;
    attempts=0;
    scoreEl.textContent=score;    
    attemptsEl.textContent=attempts;    
    messageEl.textContent = ''


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
