var quizQuest = document.getElementById("question");
var quizOpt = document.getElementById("options");
var next = document.getElementById("next");





var questions = [
    {
        question: "What is CSS used for?",
        option1: "Style the HTML page",
        option2: "Style the JAVASCRIPT page",
        option3: "Creating functionality on a webpage",
        answer: "1"
    },
    {
        question: "What do you use to end a line of code in JAVASCRIPT?",
        option1: "An !",
        option2: "An ?",
        option3: "An ;",
        answer: "3"
    },
    {
        question: "What does HTML stand for?",
        option1: "Hypertext Markup Language",
        option2: "Hypertext Model Looping",
        option3: "Hyper Mode Light-speed",
        answer: "1"
    },
    {
        question: "How do you specify an ID of container in CSS?",
        option1: "<container/>",
        option2: "#container",
        option3: ".container",
        answer: "2"
    },
    {
        question: "What can be used in a JAVASCRIPT ARRAY = []",
        option1: "Numbers & Strings",
        option2: "Functions",
        option3: "Anything",
        answer: "3"
    },
    {
        question: "In HTML, what is the difference between a <section> and a <div>",
        option1: "A div is where you place misc text",
        option2: "A section is where you use <p> tags",
        option3: "Nothing, just organization",
        answer: "3"
    }

];


function startGame() {
    event.preventDefault();
    for (i = 0; i < questions.length; i++) {
        quizQuest.textContent= questions[i];
    }
console.log(question);
};


next.addEventListener("click", startGame);