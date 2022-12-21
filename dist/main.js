let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
}
];

console.log('hi');
 

let infos =document.getElementById('info-list');
let info_title=document.getElementById('info-title');
let quiz =document.getElementById('quiz_box');
let information =document.getElementById('information');
let quizBar=document.getElementById('quiz');
let title=document.getElementById('title');
quiz.style.display = "none";
let next =document.getElementById('next');
next.addEventListener('click',function(){
    infos.style.display = "none";
    quiz.style.display = "inline";
    information.classList.remove('active');
    quizBar.classList.add('active');
    info_title.innerHTML=`
    <div id="title" class="title"> Quiz Application</div>
    <div class="timer">30 </div>  
    `;

})


