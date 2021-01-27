// Koncept:
// 1. Funktioner
// 2. Variabler
// 3. document.querySelector och document.querySelectorAll
// 4. for loop
// 5. parseInt
// 6. classList.toggle

function submitQuiz() {
  let points = 0; // Börja med noll poäng

  // Samla in alla svar:
  let answers = document.querySelectorAll("input[type='radio']:checked");

  // Loopa igenom svaren och lägg till deras "value" till points:
  for (let index = 0; index < answers.length; index++) {
    points += parseInt(answers[index].value);
  }

  // Lägg in poängen i vår "correct-answers" span:
  document.querySelector(".correct-answers").innerHTML = points;

  //Göm frågorna och visa resultatet:
  document.querySelector(".questions").classList.toggle("invisible");
  document.querySelector(".result").classList.toggle("invisible");
}

function resetQuiz() {
  //Göm resultatet och visa frågorna:
  document.querySelector(".result").classList.toggle("invisible");
  document.querySelector(".questions").classList.toggle("invisible");

  //Nollställ formuläret:
  document.querySelector(".questions").reset();
}
