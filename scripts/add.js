const newQuestion = document.querySelector("#add-form");
const questionText = document.querySelector("#add-question");
const inputs = document.querySelectorAll(".answer-choice");
const answer1 = document.querySelector("#answer-1");
const answer2 = document.querySelector("#answer-2");
const answer3 = document.querySelector("#answer-3");
const answer4 = document.querySelector("#answer-4");
const rightAnswer = document.querySelector("#right-answer");
const added = document.querySelector("#added");
added.classList.add("hide");
let inputArr = [];

const getInputs = () => {
    inputs.forEach((input) => {
        if (input.value !== "") {
            inputArr.push(input.value);
        }
    })
}

newQuestion.addEventListener("submit", (e) => {
    e.preventDefault();

    allQuestions.push({
        question: questionText.value,
        choices: inputArr,
        correctAnswer: Number(rightAnswer.value) - 1,
        id: uuidv4()
    });
    getInputs();
    inputArr = [];
    saveQuestions();
    questionText.value = "";
    answer1.value = "";
    answer2.value = "";
    answer3.value = "";
    answer4.value = "";
    rightAnswer.value = 1;

    added.classList.remove("hide")
    setTimeout(() => {
        added.style.transition = "1s"
        added.style.opacity = "1"
    }, 100)
    setTimeout(() => {
        added.style.transition = "3s"
        added.style.opacity = "0"
    }, 1000)
    setTimeout(() => {
        added.classList.add("hide")

    }, 2900)
})

