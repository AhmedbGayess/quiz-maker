const questionsContainer = document.querySelector("#questions");
const deleteCard = document.querySelector("#delete-all");
const deletAllButton = document.querySelector("#empty");

deleteCard.classList.add("hide")

const deleteQuestion = (id) => {
    const questionIndex = allQuestions.findIndex((question) => question.id === id)
    if (questionIndex > -1) {
        allQuestions.splice(questionIndex, 1)
    }
    saveQuestions()
    render()
}
const generateQuestionsDOM = () => {
    if (allQuestions.length === 0) {
        document.querySelector("#no-questions").classList.remove("hide")
    } else {
        allQuestions.forEach((question) => {
            // Create question container
            const questionCard = document.createElement("div")
            questionCard.classList.add("question-card")

            // Create question text
            const questionText = document.createElement("p")
            questionText.textContent = question.question
            questionText.classList.add("question-text");

            // //Create delete button
            const deleteButton = document.createElement("button")
            deleteButton.textContent = "Delete Question"
            deleteButton.classList.add("delete-button")
            deleteButton.addEventListener("click", () => {
                deleteQuestion(question.id)
            })

            // Display
            questionCard.appendChild(questionText);
            questionCard.appendChild(deleteButton)
            questionsContainer.appendChild(questionCard);

            deleteCard.classList.remove("hide")
        })
    }
}

const deletAll = () => {
    allQuestions = [];
    deleteCard.classList.add("hide")
    saveQuestions();
    render();
}

deletAllButton.addEventListener("click", deletAll)

const render = () => {
    {
        questionsContainer.innerHTML = "";
        generateQuestionsDOM()
    }
}

render()
