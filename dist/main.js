let questions =[
  {
    question:"Why is AWS more economical than traditional data centers for applications with varying compute  workloads?",
    reponse:[
      {option_0:" Amazon EC2 costs are billed on a monthly basis",etat:true},
      {option_1:" Users retain full administrative access to their Amazon EC2 instances",etat:true},
      {option_2:" Amazon EC2 instances can be launched on demand when needed.",etat:false},
      {option_3:"  Users can permanently run enough instances to handle peak workloads.",etat:false}
      
    ]
  },{
    question:" Which AWS service would simplify the migration of a database to AWS?",
    reponse:[
      {option1:"AWS Storage Gateway",etat:true},
      {option2:"AWS Database Migration Service (AWS DMS)",etat:false},
      {option3:" Amazon EC2",etat:false},
      {option4:"  Amazon AppStream 2.0",etat:false}
      
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
let retour =document.getElementById('retour');
let submit =document.getElementById('submit');
let answers=document.getElementById('answers-box');

retour.addEventListener('click',function(){
  alert('go back pliz!');

});
next.addEventListener('click',function(){
    infos.style.display = "none";
    quiz.style.display = "inline";
    information.classList.remove('active');
    quizBar.classList.add('active');
    info_title.innerHTML=`
    <div id="title" class="title"> Quiz Application</div>
    <div class="timer">30</div>  
    `;
  // console.log(buttons);

    addQuestion(questions[0],questionCount);
  // next.setAttribute("hidden", true);
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
//answers
for(let i=0 ;i<4;i++){
  console.log(quest.reponse[0].etat);
  //creat div answers
  let answerDiv=document.createElement("div");
  answerDiv.className='answers';
  // creat RadioNodeList
  let radio=document.createElement("input");
  //add type+name+id+data-attribute
  radio.name='question';
  radio.type='radio';
  radio.id=`option_${i}`;

  radio.dataset.option =quest.reponse[i][`option_${i}`];
  //create label

  let label=document.createElement('label');
  //add forattribute
  label.htmlFor=`option_${i}`;
  label.setAttribute("id",`option_${i}`);
  //creat label text
  let labelText=document.createTextNode(quest.reponse[i][`option_${i}`]);
  //
  label.appendChild(labelText);

  answerDiv.appendChild(radio);
  answerDiv.appendChild(label);


  answers.appendChild(answerDiv);
  let checkboxAnswer=document.getElementById(`option_${i}`);
  checkboxAnswer.addEventListener('click',function(){
    let answerChecked=label.getAttribute(`id`);
    
    console.log(answerChecked);
   let check= document.querySelector('.answers label ');
    if(answerChecked=='option_0'){
      check.style.color = 'red';
    }else{
      check.style.color = 'green';
    }
  })
  
}
}