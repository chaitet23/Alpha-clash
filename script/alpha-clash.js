function play() {
   hideElementById('home-screen');
   hideElementById('final-score');
   showElementById('play-ground');
   setTextElementById('current-life', 5);
   setTextElementById('current-score', 0);

   continueGame();

}
function gameOver() {
   hideElementById('play-ground');
   showElementById('final-score');
   const lastScore = getTextElementzValueById('current-score');
   console.log(lastScore);
   setTextElementById('last-score', lastScore);
   const currentAlphabet = getElementTextById('current-alphabet');
   // console.log(currentAlphabet);
   removeBackgroundColor(currentAlphabet);


}
function handleKeyboardButtonPress(event) {
   const playerPressed = event.key;
   console.log('Player-pressed', playerPressed);

   if (playerPressed === 'Escape') {
      gameOver();

   }
   // console.log('button presses', playerPressed);

   // get the expected to press//
   const currentAlphabetElement = document.getElementById('current-alphabet');
   const currentAlphabet = currentAlphabetElement.innerText;
   const expextedAlphabet = currentAlphabet.toLowerCase();
   // console.log(expextedAlphabet , playerPressed);


   if (playerPressed === expextedAlphabet) {
      // console.log('You got a point');
      const currentScore = getTextElementzValueById('current-score');
      const newScore = currentScore + 1;
      setTextElementById('current-score', newScore);

      // const currentScoreElement = document.getElementById('current-score');
      // const currentScoreText = currentScoreElement.innerText;
      // const currentScore = parseInt(currentScoreText);
      // console.log(currentScore);
      // currentScoreElement.innerText = newScore;
      removeBackgroundColor(expextedAlphabet);
      continueGame();
   }
   else {
      const currentLife = getTextElementzValueById('current-life');
      const updatedLife = currentLife - 1;
      setTextElementById('current-life', updatedLife);

      // console.log('You missed. you lost a life');
      // const currentLifeElement = document.getElementById('current-life');
      // const currentLifeText = currentLifeElement.innerText;
      // const currentLife = parseInt(currentLifeText);

      // const newLife = currentLife - 1;

      // currentLifeText.innerText = newLife;

      if (updatedLife === 0) {
         gameOver();
      }

   }

}


document.addEventListener('keyup', handleKeyboardButtonPress);



function continueGame() {
   const alphabet = getARandomAlphabet();
   const currentAlphabetElement = document.getElementById('current-alphabet');
   currentAlphabetElement.innerText = alphabet;

   setBackgroundColor(alphabet);

}

