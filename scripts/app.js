// Timer

const timerContainer = document.querySelector("#timer");
const timerDOM = document.querySelector("#time");
let timer = 11;
let count;

const countdown = (timer) => {
    count = setInterval(() => {
        timer--;
        timerDOM.textContent = timer;
        if (timer === 5) {
            timerContainer.style.background = "#F7A01F";
        }
        if (timer === 0) {
            timerContainer.style.background = "#FD5700";
            clearInterval(count);
            index++;
            createQuestion(allQuestions, index);
            setTimeout(() => {
                timerContainer.style.background = "rgb(89, 136, 133)";
            }, 1000)
        }
    }, 1000)
}

// Questions

const container = document.querySelector("#container");

let index = 0;
let score = 0;

const createQuestion = function (questions, num) {
    const question = questions[num];

    if (index < questions.length) {
        container.innerHTML = "";
        const questionContainer = document.createElement("form");
        questionContainer.classList.add("form");
        setTimeout(() => {
            questionContainer.classList.add("fade");
        }, 200)

        countdown(timer);

        const questionText = document.createElement("p");
        questionText.textContent = question.question;
        questionText.classList.add("question");
        questionContainer.appendChild(questionText);

        question.choices.forEach((choice) => {
            const choiceContainer = document.createElement("div");
            const id = uuidv4();
            const radio = document.createElement("input");
            radio.type = "radio"
            radio.setAttribute("name", "answer");
            radio.setAttribute("value", choice);
            radio.setAttribute("id", id);
            radio.required = true;
            const answer = document.createElement("label");
            answer.setAttribute("for", id);
            answer.textContent = choice;
            choiceContainer.appendChild(radio);
            choiceContainer.appendChild(answer);
            questionContainer.appendChild(choiceContainer);
        })

        const button = document.createElement("button");
        button.textContent = "Next";
        if (index === questions.length - 1) {
            button.textContent = "Go To Results";
        }
        questionContainer.appendChild(button);
        container.appendChild(questionContainer);
        const correct = question.choices[question.correctAnswer];

        questionContainer.addEventListener("submit", (e) => {
            e.preventDefault();
            const checkedAnswers = e.target.querySelectorAll('input');
            checkedAnswers.forEach((answer) => {
                if (answer.checked) {
                    if (answer.value === correct.toString()) {
                        score++;
                        console.log(score);
                    }
                }
            })
            clearInterval(count);
            timerContainer.style.background = "rgb(89, 136, 133)";
            index++;
            createQuestion(allQuestions, index);

        })
    }

    else if (index > 0) {
        const scoreContainer = document.createElement("div");
        scoreContainer.classList.add("result");
        setTimeout(() => {
            scoreContainer.classList.add("fade");
        }, 1000)
        setTimeout(() => {
            timerContainer.classList.add("hide");
        }, 1000)

        const scoreMessage = document.createElement("p");

        const message = () => {
            if (score === questions.length) {
                return `Perfect Score! You got ${score}/${questions.length}`;
            } else if (score === 0) {
                return `You got all the answers wrong! ${score}/${questions.length}`;
            } else {
                return `Not Bad! You got ${score}/${questions.length}`;
            }
        }
        scoreMessage.textContent = message();
        scoreContainer.appendChild(scoreMessage);
        container.innerHTML = "";
        container.appendChild(scoreContainer);
    } 

}


const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", () => {
    createQuestion(allQuestions, index);
    container.classList.remove("hide");
    timerContainer.classList.remove("hide");
    startBtn.classList.add("hide");
})

const noQuestions = document.querySelector("#no-questions");
if (allQuestions.length === 0) {
    noQuestions.classList.remove("hide");
    timerContainer.classList.add("hide");
    startBtn.classList.add("hide")
}






