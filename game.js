/** Represents a players Turn  for Rock. */
const rockClick = () => {
  document.getElementById('player-pick-icon').innerHTML =  '<i class="fas fa-hand-rock" aria-hidden="true"></i>';
  computersTurn('rock')
}

/** Represents a players Turn  for Paper. */
const paperClick = () => {
  document.getElementById('player-pick-icon').innerHTML =  '<i class="fas fa-hand-paper" aria-hidden="true"></i>';
  computersTurn('paper')
}

/** Represents a players Turn  for Scissors. */
const scissorsClick = () => {
  document.getElementById('player-pick-icon').innerHTML =  '<i class="fas fa-hand-scissors" aria-hidden="true"></i>';
  computersTurn('scissors')
}

/**
 * Represents the Computers turn.
 * @param {string} playersPick - The result from the players turn.
 */
const computersTurn = (playersPick) => {
  let choices =[
    ['rock', 'paper', 'scissors'],
    [ 'paper', 'scissors', 'rock'],
    ['scissors','rock', 'paper']
  ]
  let computersPick =  choices[Math.round(Math.random() * 2)][Math.round(Math.random() * 2)];
  if(computersPick == 'rock') {
      document.getElementById('computers-pick-icon').innerHTML =  '<i class="fas fa-hand-rock" aria-hidden="true"></i>';
  } else if ( computersPick == 'paper' ) {
      document.getElementById('computers-pick-icon').innerHTML =  '<i class="fas fa-hand-paper" aria-hidden="true"></i>';
  } else {
    document.getElementById('computers-pick-icon').innerHTML =  '<i class="fas fa-hand-scissors" aria-hidden="true"></i>';
  }
  winLogic(playersPick, computersPick)
}

/**
* Logic to increase players scores.
* @param {string} scoreType - The type out win/lose outcome.
*/
const increaseScore = (scoreType) => {
  let score = localStorage.getItem(scoreType);
  score++
  localStorage.setItem(scoreType, score);

  /** Set scores from localStorage */
  document.getElementById(`users-${scoreType}`).innerHTML = score;
}

/**
 * Win Logic to increase scoress.
 * @param {string} playersPick - The result from the players turn.
 * @param {string} computersPick - TThe result from the computers turn.
 */
const winLogic = (playersPick, computersPick) => {
    if( playersPick == computersPick) {
      increaseScore('ties')
      document.getElementById('player-outcome').innerHTML = 'Player Ties against the computer'
    }else if(playersPick == 'rock' && computersPick == 'scissors'){
      increaseScore('wins')
      document.getElementById('player-outcome').innerHTML = 'Player Wins against the computer'
    } else if(playersPick == 'paper' && computersPick == 'rock'){
      increaseScore('wins')
      document.getElementById('player-outcome').innerHTML = 'Player Wins against the computer'
    } else if(playersPick == 'scissors' && computersPick == 'paper'){
      increaseScore('wins')
      document.getElementById('player-outcome').innerHTML = 'Player Wins against the computer'
    } else{
      increaseScore('losses')
      document.getElementById('player-outcome').innerHTML = 'Player Losses against the computer'
    }
}

/** Resetting the localStorage */
const resetScore = () => {
  localStorage.clear()
  location.reload();
}

/** When the browers load, do this first */
$(window).on('load', function(){
  console.log('Lets Play RPS!');

  /** Set up localStorage */
  localStorage.setItem('wins', 0);
  localStorage.setItem('ties', 0);
  localStorage.setItem('losses', 0);

  /** Set scores from localStorage */
  document.getElementById('users-wins').innerHTML = localStorage.getItem('wins');
  document.getElementById('users-ties').innerHTML = localStorage.getItem('ties');
  document.getElementById('users-losses').innerHTML = localStorage.getItem('losses');
});
