var gameOver = false;
var noWinner = false;
var totalMove = 0;
var currentPlayer = 'X';

function placeMarker(spotId){
    // if the game is not over
    if(!gameOver){
    //      get spot/ element by spotId
    var spot = document.getElementById(spotId);
    //     if the spot is empty
    //      place the marker by changing the innerHTML of the spot
    //      depending on who is the current player
        if(spot.innerHTML === ''){
            if(currentPlayer === 'X'){
                spot.innerHTML = 'X';
                totalMove++;
            }
            else{
                spot.innerHTML = 'O';
                totalMove++;
            }
        }
    
    //      check if the current has won the game by calling currentPlayerWon
    //       if(currentPlayerWon()){
    //          if yes, display winner message, set gameover = true;
    //       }
    //          if no, switch currentPlayer, totalMove++;, then call placeMarker again
    //     else
    //      do nothing
        if(currentPlayerWon()){
            updateGameStatus();
        }
        else{
            updateGameStatus();
        }
    }
}

function currentPlayerWon(){
    // get each spot using getElementById()
    // for example, s1 = document.getElementById('1')
    // s2 = document.getElementById('2')
    // s3, s4 ... s9
    var s1 = document.getElementById('one');
    var s2 = document.getElementById('two');
    var s3 = document.getElementById('three');
    var s4 = document.getElementById('four');
    var s5 = document.getElementById('five');
    var s6 = document.getElementById('six');
    var s7 = document.getElementById('seven');
    var s8 = document.getElementById('eight');
    var s9 = document.getElementById('nine');
    // (s1.innerHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML) || <= first row
    // (s4.innerHTML === s5.innerHTML && s5 === s6.innerHTML) <== second row
    // ...
    //    gameOver = true;
    // else
    //    gameOver = false;
    if(((s1.innerHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML) && s1.innerHTML === 'X') || // first row matching X
    ((s1.innerHTML === s4.innerHTML && s4.innerHTML === s7.innerHTML) && s1.innerHTML === 'X') || // first column matching X
    ((s1.innerHTML === s5.innerHTML && s5.innerHTML === s9.innerHTML) && s1.innerHTML === 'X') || // top left, middle, bottom right matching X
    ((s4.innerHTML === s5.innerHTML && s5.innerHTML === s6.innerHTML) && s4.innerHTML === 'X') || // second row matching X
    ((s2.innerHTML === s5.innerHTML && s5.innerHTML === s8.innerHTML) && s2.innerHTML === 'X') || // second column matching X
    ((s7.innerHTML === s8.innerHTML && s8.innerHTML === s9.innerHTML) && s7.innerHTML === 'X') || // third row matching X
    ((s3.innerHTML === s6.innerHTML && s6.innerHTML === s9.innerHTML) && s3.innerHTML === 'X') || // third column matching X
    ((s3.innerHTML === s5.innerHTML && s5.innerHTML === s7.innerHTML) && s3.innerHTML === 'X') || // top right, middle, bottom left X
    ((s1.innerHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML) && s1.innerHTML === 'O') || // first row matching O
    ((s1.innerHTML === s4.innerHTML && s4.innerHTML === s7.innerHTML) && s1.innerHTML === 'O') || // first column matching O
    ((s1.innerHTML === s5.innerHTML && s5.innerHTML === s9.innerHTML) && s1.innerHTML === 'O') || // top left, middle, bottom right matching O
    ((s4.innerHTML === s5.innerHTML && s5.innerHTML === s6.innerHTML) && s4.innerHTML === 'O') || // second row matching O
    ((s2.innerHTML === s5.innerHTML && s5.innerHTML === s8.innerHTML) && s2.innerHTML === 'O') || // second column matching O
    ((s7.innerHTML === s8.innerHTML && s8.innerHTML === s9.innerHTML) && s7.innerHTML === 'O') || // third row matching O
    ((s3.innerHTML === s6.innerHTML && s6.innerHTML === s9.innerHTML) && s3.innerHTML === 'O') || // third column matching O
    ((s3.innerHTML === s5.innerHTML && s5.innerHTML === s7.innerHTML) && s3.innerHTML === 'O')){ // top right, middle, bottom left O
        gameOver = true;
    }
    // else
    //    gameOver = false;
    else{
        gameOver = false;
    }
    // if(!gameOver){
    //    if(totalMove == 8){ <== maybe 9
    //        gameOver = true;
    // }
    //}
    if(!gameOver){
        if(totalMove == 9){
            gameOver = true;
            noWinner = true;
        }
    }
    return gameOver;
}

function updateGameStatus(){
    var statusboard = document.getElementById('status');
    // if (gameOver){
    //    if it is not a tie
    //}
    if(gameOver){
        if(noWinner){
            statusboard.innerHTML = "It's a tie!";
        }
        else{
            if(currentPlayer === 'X'){
                statusboard.innerHTML = "Player X won!"
            }
            else{
                statusboard.innerHTML = "Player O won!"
            }
        }
    }
    else{
        if(currentPlayer === 'X'){
            currentPlayer = 'O';
            statusboard.innerHTML = "It is now Player O turn."
        }
        else{
            currentPlayer = 'X';
            statusboard.innerHTML = "It is now Player X turn."
        }
    }
}

function startGame(){
}