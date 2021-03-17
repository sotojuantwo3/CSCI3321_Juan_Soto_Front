function updateDisplay(newValue){
    //Find display box
    var d = document.getElementById('display');

    switch(newValue){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            d.innerHTML += newValue;
            break;

        case 'AC':
            d.innerHTML = '';
            break;

        case '+':
        case '-':
        case '*':
        case '/':
            // if the display box is empty
            d.innerHTML += newValue;
            break;
                // do nothing
            // else if the display value ends with +,-,*,/
                // do nothing            
            // else
                // apend the key to the display

        case '=':
            // if the display box is not empty
                // call Javascript's evaluation funciton to evaluate
                // the content of the display box
                break;
    }

}

function add(x, y){
    return x+y;
}

function subtract(x,y){
    return x-y;
}

function multi(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}