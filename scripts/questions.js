const loadQuestions = () => {
        const storedQuestions = localStorage.getItem("Questions")
    
        if (storedQuestions !== null) {
            return JSON.parse(storedQuestions)
        } else {
            return []
        }
}

let allQuestions = loadQuestions();

const saveQuestions = () => {
    localStorage.setItem("Questions", JSON.stringify(allQuestions))
}

