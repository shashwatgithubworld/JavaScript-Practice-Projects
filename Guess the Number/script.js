const userInput = document.querySelector('#input');
const form = document.querySelector('form');
const result = document.querySelector('.message');
const allGuesses = document.querySelector('.all-guesses');
const submitBtn = document.querySelector('.submit-btn');
const startGameBtn = document.querySelector('.start-game')


function iife (){
    const allGuessesArray = [];

let randomNumber = Math.round(Math.random() * 100);

form.addEventListener('submit', (e)=> {
    e.preventDefault()  
    const userInputValue = parseInt(userInput.value)
    if(userInputValue < randomNumber){
        result.innerText = 'Too Low!';
    }else if( userInputValue > randomNumber ){
        result.innerText = 'Too high!';

    }else {
        result.innerText = 'Congrats! You Guessed it right !!';
        startGameBtn.disabled = false;
        submitBtn.disabled = true;
    }

    allGuessesArray.push(userInputValue)
    allGuesses.innerText = `Your Guesses : ${(allGuessesArray.join(', '))}`
    
    // userInput.value = ''; we can use this also 
    form.reset()
})

startGameBtn.addEventListener('click', ()=>{
    result.innerText = '';
    allGuesses.innerText = '';
    allGuessesArray = [];
    startGameBtn.disabled = true;
    submitBtn.disabled = false;
    randomNumber = Math.round(Math.random() * 100);
})
};
iife ();