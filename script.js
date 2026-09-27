const questions = [
    {
        question: "Which tool is used to containerize applications?",
        answers: ["Docker", "Git", "Linux", "Jenkins"],
        correct: "Docker"
    },
    {
        question: "Which tool is used for container orchestration?",
        answers: ["Docker", "Kubernetes", "GitHub", "Linux"],
        correct: "Kubernetes"
    },
    {
        question: "Which command shows the current directory?",
        answers: ["ls", "pwd", "cd", "mkdir"],
        correct: "pwd"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("nextBtn");

function showQuestion() {
    const q = questions[currentQuestion];

    questionElement.textContent = q.question;
    answersElement.innerHTML = "";

    q.answers.forEach(answer => {
        const button = document.createElement("button");

        button.textContent = answer;
        button.classList.add("answer");

        button.onclick = () => checkAnswer(answer);

        answersElement.appendChild(button);
    });
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correct) {
        score++;
        scoreElement.textContent = "Score: " + score;
        alert("Correct! 🎉");
    } else {
        alert("Wrong answer ❌");
    }
}

nextButton.onclick = () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        questionElement.textContent = "Game Finished! 🎮";
        answersElement.innerHTML =
            "Your final score: " + score + "/" + questions.length;
        nextButton.style.display = "none";
    }
};

showQuestion();
