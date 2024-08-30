function checkAnswer() {
    var userInput = document.getElementById("userInput").value;
    var correctAnswer1 = 'name = "mo7sen"';
    var correctAnswer2 = "name = 'mo7sen'";

    if (userInput === correctAnswer1 || userInput === correctAnswer2) {
        document.getElementById("result").innerText = "عمل جيد!";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText = "إجابة خاطئة!";
        document.getElementById("result").style.color = "red";
    }
}
