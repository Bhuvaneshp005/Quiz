const quiz = [
    {
        question:" What does HTML stand for?",
        ans1text: "Hyper Text Markup Language",
        ans2text: "Home Tool Markup Language",
        ans3text: "Hyperlinks and Text Markup Language",
        ans4text: "Hyper Tool Markup Language",
        answer: "Hyper Text Markup Language",
    },
    {   
        question: "Which language is used for styling web pages?",
        ans1text: " HTML",
        ans2text: "Java script",
        ans3text: "CSS",
        ans4text: "XML",
        answer: "CSS",
    },
    {
        question: "Which HTML element is used to define the title of a document?",
        ans1text: "<meta>",
        ans2text: "<title>",
        ans3text: "<head>",
        ans4text: "<header></header>",
        answer: "<title>",
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        ans1text: "class",
        ans2text: "font",
        ans3text: "styles",
        ans4text: "style",
        answer: "style",

    },
    {
        question: "What does CSS stand for?",
        ans1text: "Colorful Style Sheets",
        ans2text: "Creative Style Sheets",
        ans3text: "Cascading Style Sheets",
        ans4text: "none of the above",
        answer: "Cascading Style Sheets",
    },
    {
        question: "In CSS, which property is used to change the text color of an element?",
        ans1text: "fgcolor",
        ans2text: "text-color",
        ans3text: "color",
        ans4text: "font-color",
        answer: "color",
    },
    {
        question: "Which is the correct CSS syntax?",
        ans1text: "body=black;",
        ans2text: "{body;color;}",
        ans3text: "body {color: black;}",
        ans4text: "{body=black;}",
        answer: "body {color: black;}",
    },
    {
        question: "How do you insert a comment in a CSS file?",
        ans1text: "// this is a comment",
        ans2text: "/* this is a comment */",
        ans3text: " <!-- this is a comment -->",
        ans4text: "' this is a comment",
        answer: "/* this is a comment */",
    },
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        ans1text: "<footer>",
        ans2text: "<bottom>",
        ans3text: " <section>",
        ans4text: "<div></div>",
        answer: "<footer>",
    },
    {
        question: "Which JavaScript function is used to write a message to the web page?",
        ans1text: "print()",
        ans2text: "log()",
        ans3text: "write()",
        ans4text: "document.write()",
        answer: "document.write()",
    }, 
    {
        question: "Which HTML attribute is used to specify a unique identifier for an element?",
        ans1text: "class",
        ans2text: "id",
        ans3text: "name",
        ans4text: "tag",
        answer:"id",
    },
    {
        question: "Which property is used in CSS to change the background color?",
        ans1text: "color",
        ans2text: "bgcolor",
        ans3text: "background-color",
        ans4text: " background",
        answer: "background-color",
    }, 
    {
        question: " Which method can be used to select an element by its ID in JavaScript?",
        ans1text: " getElementByClass",
        ans2text: "getElementById",
        ans3text: "getElementByName",
        ans4text: "getElementByTag",
        answer: "getElementById",
    },
 

]

const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);  
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    if( checkedAns === null){
        alert("Please select an answer");
    }else{
        if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        if( currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
});