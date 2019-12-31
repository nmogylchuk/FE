var counter = 0;

var randomValue = recalculateRandomValue(counter);

function onClickFunction() {
    counter++;

    //read user guess number
    var guessField = document.getElementById("guessField");
    var number = guessField.value;

    var answerField = document.getElementById("result");
    var commentField = document.getElementById("comment");

    if (number == randomValue) {
        //clear comment p
        commentField.innerHTML = "";
        
        //set successfull answer p
        answerField.innerHTML = "Вітаємо! Ти за " + counter + " спроб вгадав число :-)";
    }
    else {
        //set failed answer p
        var answer = answerField.textContent;
        answerField.innerHTML = answer + " " + number;

        //set comment p
        commentField.innerHTML = "На жаль, ти помилився! :-(";

        //clear guess field
        guessField.value = "";
        
        //generate next random value
        randomValue = recalculateRandomValue(counter);
    }
}

function recalculateRandomValue(counterValue) {
    var i = 100 - counterValue;
    return Math.floor(Math.random() * i + 1);
}



