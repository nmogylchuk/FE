var randomValue = Math.floor(Math.random() * 100 + 1);

function onClickFunction() {
    count();

    var guessField = document.getElementById("guessField");
    var number = guessField.value;
    console.log(number);

    if (number == randomValue) {
        document.getElementById("result").innerHTML = "Вітаємо! Ти за " + counter + " спроб вгадав число";
    }
    else {
        document.getElementById("result").innerHTML = "Не вгадав";
        guessField.size = guessField.size - counter;
    }
}

var counter = 0;
function count() {
    return counter++;
}
