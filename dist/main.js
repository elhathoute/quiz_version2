let questions =[
  {
   question:"1-Why is AWS more economical than traditional data centers for applications with varying compute  workloads?",
      option_0:"Amazon EC2 costs are billed on a monthly basi",
      option_1:"Users retain full administrative access to their Amazon EC2 instance",
      option_2:"Amazon EC2 instances can be launched on demand when needed",
      option_3:"Users can permanently run enough instances to handle peak workloads.",
      vrai:"Amazon EC2 instances can be launched on demand when needed"
      
    
  },{
    question:"2-Which AWS service would simplify the migration of a database to AWS?",
    option_0:"AWS Storage Gateway",
    option_1:"AWS Database Migration Service (AWS DMS)",
    option_2:"Amazon EC2",
    option_3:"Users can permanently run enough instances to handle peak workloads.",
    vrai:"AWS Database Migration Service (AWS DMS)"
    
  },{
    question:"3-Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?",
    option_0:"AWS Config",
    option_1:"AWS OpsWorks",
    option_2:"Amazon  AWS SDK",
    option_3:"AWS Marketplace",
    vrai:"AWS Marketplace"
    
  }

 

];

let lenghtOfTable=questions.length;

let questionCount=questions.length;



let infos =document.getElementById('info-list');
let info_title=document.getElementById('info-title');
let quiz =document.getElementById('quiz_box');
let information =document.getElementById('information');
let quizBar=document.getElementById('quiz');
let resultat=document.getElementById('resultat');
let title=document.getElementById('title');
quiz.style.display = "none";
let next =document.getElementById('next');
let retour =document.getElementById('retour');
let submit =document.getElementById('submit');
let answers=document.getElementById('answers-box');
let currentIndex=0;
let totalReponseVraix=0;
retour.style.display="none";



submit.style.display="none";
retour.addEventListener('click',function(){
 
   if(currentIndex>0) {
    let reponsrvraix=questions[currentIndex].vrai;
    console.log('check answer');
    currentIndex--;
  
   
    checkAnswer(reponsrvraix,questionCount);

       //remove old question
       title.innerHTML='';
       answers.innerHTML='';
//get autre question
addQuestion(questions[currentIndex],questionCount);
}

else if(currentIndex==0 ) {
  window.location.reload();

}
});

next.addEventListener('click',function(){
 
   removeBtnNext();
    infos.style.display = "none";
    quiz.style.display = "inline";
    information.classList.remove('active');
    quizBar.classList.add('active');
    info_title.innerHTML=`
    <div id="title" class="title"> Quiz Application</div>
    <div class="timer">30</div>  
    `;

  // console.log(buttons);
 
    addQuestion(questions[currentIndex],questionCount);
   
  // next.setAttribute("hidden", true);

  submit.onclick=function(){
   
      retour.style.display="block";
    
    
    let reponsrvraix=questions[currentIndex].vrai;
    console.log('check answer');
     currentIndex++;
    checkAnswer(reponsrvraix,questionCount);

       //remove old question
       title.innerHTML='';
       answers.innerHTML='';
//get autre question
addQuestion(questions[currentIndex],questionCount);
  // if(currentIndex==questionCount){
  //   quizBar.classList.remove('active');
  //   resultat.classList.add('active');
  //   title.innerHTML='votre score est';
  //   answers.innerHTML='1/'+questionCount;
  // } 
 afficherResultat(questionCount);
 

  };

})


function addQuestion(quest,count){
 if(currentIndex<count){
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
    
      //creat div answers
      let answerDiv=document.createElement("div");
      answerDiv.className='answers';
      // creat RadioNodeList
      let radio=document.createElement("input");
      //add type+name+id+data-attribute
      radio.name='question';
      radio.type='radio';
      radio.id=`option_${i}`;
    
      radio.dataset.option =quest[`option_${i}`];
      //create label
    
      let label=document.createElement('label');
      //add forattribute
      label.htmlFor=`option_${i}`;
      label.setAttribute("id",`option_${i}`);
      //creat label text
      let labelText=document.createTextNode(quest[`option_${i}`]);
      //
      label.appendChild(labelText);
    
      answerDiv.appendChild(radio);
      answerDiv.appendChild(label);
    
    
      answers.appendChild(answerDiv);
      let checkboxAnswer=document.getElementById(`option_${i}`);
      // checkboxAnswer.addEventListener('click',function(){
      //   let answerChecked=label.getAttribute(`id`);
        
      //   console.log(answerChecked);
      //  let check= document.querySelector('.answers label ');
      //   if(answerChecked=='option_0'){
      //     check.style.color = 'red';
      //   }else{
      //     check.style.color = 'green';
      //   }
      // })
      
    }
 }

}
function checkAnswer(answer){
  // console.log(answer);
  // console.log(count);

  let lesReponse=document.getElementsByName("question");
  let ReponseChoisi;
  // console.log(lesReponse);
 for(let i=0;i<lesReponse.length;i++){
  // console.log(lesReponse[i]);
  if(lesReponse[i].checked){
    ReponseChoisi=lesReponse[i].dataset.option;
  }
 }

 console.log(`corect is':${answer}`);
 console.log(`choisi is':${ReponseChoisi}`);
 if(answer==ReponseChoisi){
  totalReponseVraix++;
 }

console.log(totalReponseVraix);
}

function afficherResultat(count){

  if(currentIndex===count){
    //supp titre
     title.remove();
     //
    answers.innerHTML=`<span>Votre score est : ${totalReponseVraix}/${count}</span>`;

    submit.style.display="none";
     console.log(count);
  }

  
}

function removeBtnNext(){
  next.style.display="none";
 
  submit.style.display="block";

}