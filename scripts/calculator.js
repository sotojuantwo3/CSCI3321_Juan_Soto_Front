var clicked = false; // indicator if the equal button has been already clicked

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
            // if the display is displaying "Err" or the equal button already clicked
                // newValue is displayed only
            // else
                // newValue is added onto display
            if(d.innerHTML === "Err" || clicked){
                d.innerHTML = newValue;
                clicked = false;
                break;
            }
            else{
                d.innerHTML += newValue;
            }
            break;
        case 'AC':
            d.innerHTML = '';
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            // if the display box is empty
                // do nothing
            // else if the display value ends with +,-,*,/
                // do nothing            
            // else
                // apend the key to the display
            if(d.innerHTML === ''){
                break;
            }
            else if(d.innerHTML.endsWith('+') || d.innerHTML.endsWith('-') || d.innerHTML.endsWith('*') || d.innerHTML.endsWith('/')){
                break;
            }
            else{
                d.innerHTML += newValue;
            }
            break;

        case '=':
            // if the display box is not empty
                // call Javascript's evaluation funciton to evaluate
                // the content of the display box
            clicked = true;
            if(d.innerHTML === ''){
                break;
            }
            else if(d.innerHTML.endsWith('+') || d.innerHTML.endsWith('-') || d.innerHTML.endsWith('*') || d.innerHTML.endsWith('/')){
                d.innerHTML = "Err";
            }
            else{
                d.innerHTML = eval(d.innerHTML);
            }
            break;
    }

}