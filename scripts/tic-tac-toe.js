var gameOver = false;
var totalMove = 0;
var currentPlayer = 'X';

function placeMarker(spotId){
    // if the game is not over
    if(!gameOver){
    //      get spot/ element by spotId
    //     if the spot is empty
    //      place the marker by changing the innerHTML of the spot
    //      depending on who is the current player
    //      check if the current has won the game by calling currentPlayerWon
    //       if(currentPlayerWon()){
    //          if yes, display winner message, set gameover = true;
    //       }
    //          if no, switch currentPlayer, totalMove++;, then call placeMarker again
    //     else
    //      do nothing
    // else 
    //     do nothing
    }
    
}

function currentPlayerWon(){
    // get each spot using getElementById()
    // for example, s1 = document.getElementById('1')
    // s2 = document.getElementById('2')
    // s3, s4 ... s9
    // (s1.innerHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML) || <= first row
    // (s4.innerHTML === s5.innerHTML && s5 === s6.innerHTML) <== second row
    // ...
    //    gameOver = true;
    // else
    //    gameOver = false;
    // if(!gameOver){
    //    if(totalMove == 8){ <== maybe 9
    //        gameOver = true;
    // }
    //}
}