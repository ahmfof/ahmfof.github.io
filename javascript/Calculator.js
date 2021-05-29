function calculator() {
    let numberone = parseFloat(document.getElementById('number1').value);
    let numbertwo = parseFloat(document.getElementById('number2').value);
    let operator = document.getElementById('operator').value;
    let answerchild = parseFloat(document.getElementById('answer').value);
    let answercorrect

    switch (operator) {
        case "+":
            answercorrect= numberone + numbertwo;
            break;
        case "-":
            answercorrect= numberone - numbertwo;
            break;
        case "*":
            answercorrect= numberone * numbertwo;
            break;
        case "/":
            answercorrect= numberone / numbertwo;
            break;
    
    }
    switch (answerchild) {
        case answercorrect:
            document.getElementById('output').innerHTML= "Correct! 🏆";
            break;
            
        default:
            document.getElementById('output').innerHTML="Incorrect 😢";

    }
}
