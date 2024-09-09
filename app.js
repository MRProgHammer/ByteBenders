const questions = [
    {
    
    question: "Where is Taj mahal Located?",
    
    answers: [
    { text: "Delhi", correct: false},
    { text: "Agra", correct: true},
    { text: "Mumbai", correct: false},
    { text: "Hyderabad", correct: false},
     ]
 },
    {question: "Where is Qutub Minar Located?",
    
        answers: [
        { text: "Agra", correct: false},
        { text: "Delhi", correct: true},
        { text: "Mumbai", correct: false},
        { text: "Hyderabad", correct: false},
         ]
    
    
    },
    {
        question: "Where is Lotus Temple Located?",
    
    answers: [
    { text: "Lucknow", correct: false},
    { text: "Delhi", correct: true},
    { text: "Mumbai", correct: false},
    { text: "Hyderabad", correct: false},
     ]
    },
    {
        question: "Where is sanchi stupa Located?",
    
    answers: [
    { text: "Delhi", correct: false},
    { text: "MP", correct: true},
    { text: "Mumbai", correct: false},
    { text: "Hyderabad", correct: false},
     ]
    },

    
     ]
     const questionElement = document.getElementById("question");
    
     const answerButtons = document.getElementById("answer-buttons"); 
      const nextButton = document.getElementById("next-btn");
    
    
    
     let currentQuestionIndex = 0;
    
     let score = 0;
    
    
    
     function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    
     }

    function showQuestion(){
        resetState();
    
     let currentQuestion = questions [currentQuestionIndex];
     let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
     
    
    currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    
    
    
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
     }else{
    selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
    
    if(button.dataset.correct === "true") { 
        button.classList.add("correct");
    
    }
     button.disabled = true;
    
    });
    
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${Score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length){
        showQuestion();
    }else{
        showScore();
    }


}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz()