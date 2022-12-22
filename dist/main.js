let questions =[
  {
    question:"Why is AWS more economical than traditional data centers for applications with varying compute  workloads?",
    reponse:[
      {option:" Amazon EC2 costs are billed on a monthly basis",etat:true},
      {option:" Amazon EC2 costs are billed on a monthly basis",etat:false},
      {option:" Amazon EC2 instances can be launched on demand when needed.",etat:false},
      {option:"  Users can permanently run enough instances to handle peak workloads.",etat:false}
      
    ]
  },{
    question:" Which AWS service would simplify the migration of a database to AWS?",
    reponse:[
      {option:"AWS Storage Gateway",etat:true},
      {option:"AWS Database Migration Service (AWS DMS)",etat:false},
      {option:" Amazon EC2",etat:false},
      {option:"  Amazon AppStream 2.0",etat:false}
      
    ]
  }

];

let lenghtOfTable=questions.length;

let questionCount=questions.length;

// console.log(lenghtOfTable);
 
// for(let i=0;i<lenghtOfTable;i++){
//   console.log(questions[i].question);
//   console.log(questions[i].reponse);
// }




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
    <div class="timer">30</div>  
    `;

    addQuestion(questions[0],questionCount);
})
let currentIndex=0;

function addQuestion(quest,count){
  // console.log(obj);
  // console.log(count);
  //crer le titre de question
  let questionTitre=document.createElement("h2");
//crer le text de question
let questionText=document.createTextNode(quest.question);

console.log(questionTitre);
console.log(questionText);
//append
questionTitre.appendChild(questionText);
title.appendChild(questionTitre);
}