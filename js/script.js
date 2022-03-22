let playerWon = 0,
    computerWon = 0;

function buttonClicked(argButtonName) {
  clearMessages();
  clearResult();
  console.log(argButtonName + ' został kliknięty');
  
  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier'
    } else if (argMoveId == 3) {
      return 'nożyce'
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }
  
  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
      
    if ((argPlayerMove == 'papier' && argComputerMove == 'kamień')
    || (argPlayerMove == 'kamień' && argComputerMove == 'nożyce')
    || (argPlayerMove == 'nożyce' && argComputerMove == 'papier'))
    {
      printMessage('Wygrywasz!');
      playerWon++;
      
    }
    else if (argPlayerMove == argComputerMove) {
      printMessage('Remis.');
    }
    else {
      printMessage('Przegrywasz :(');
      computerWon++;
      
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');
    printResult('Aktualny wynik: ' + playerWon + ' - ' + computerWon);
    
  }
   
  playerMove = argButtonName;
  
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  
  displayResult(playerMove, computerMove);
}

let buttonRock, buttonPaper, buttonScissors;

buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); } );

buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); } );

buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); } );
