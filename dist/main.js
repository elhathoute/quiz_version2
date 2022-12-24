let questions =[
  {
   question:"1-Why is AWS more economical than traditional data centers for applications with varying compute  workloads?",
      option_0:"Amazon EC2 costs are billed on a monthly basi",
      option_1:"Users retain full administrative access to their Amazon EC2 instance",
      option_2:"Amazon EC2 instances can be launched on demand when needed",
      option_3:"Users can permanently run enough instances to handle peak workloads.",
      vrai:"Amazon EC2 instances can be launched on demand when needed",
      explication:"Q1:C-The ability to <a href='https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html'> launch instances on demand </a> when needed allows users to launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load."
      
  },{
    question:"2-Which AWS service would simplify the migration of a database to AWS?",
    option_0:"AWS Storage Gateway",
    option_1:"AWS Database Migration Service (AWS DMS)",
    option_2:"Amazon EC2",
    option_3:"Users can permanently run enough instances to handle peak workloads.",
    vrai:"AWS Database Migration Service (AWS DMS)",
    explication:"Q2:B- AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database.<a href='https://aws.amazon.com/fr/dms/'> AWS DMS</a> can migrate data to and from most widely used commercial and open-source databases."
    
  },{
    question:"3-Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?",
    option_0:"AWS Config",
    option_1:"AWS OpsWorks",
    option_2:"Amazon  AWS SDK",
    option_3:"AWS Marketplace",
    vrai:"AWS Marketplace",
    explication:"Q3:D- <a href='https://aws.amazon.com/marketplace/'>AWS Marketplace</a> is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS."
    
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
let replay =document.getElementById('replay');
let submit =document.getElementById('submit');
let retour =document.getElementById('retour');

// let info_title=document.getElementById('info-title');
let answers=document.getElementById('answers-box');

let user_input=document.getElementById("user-input");






// console.log(currentIndex);

let totalReponseVraix=0;
let currentIndex=Math.floor(Math.random() * 2);



replay.style.display="none";

submit.style.display="none";

retour.style.display="none";

replay.addEventListener('click',function(){
  window.location.reload();

});

next.style.display='none';
user_input.addEventListener("keyup",function(){
  if(this.value==''){
    next.style.display='none';
   

    }else{
      next.style.display='block';
    }
})


next.addEventListener('click',function(){
  const divUser = document.createElement("div");

user_input.replaceWith(divUser);
let nomUser=user_input.value;
nomUser.className="nom_user";
divUser.innerHTML="<h3>Bonjour <i class='fa fa-user' aria-hidden='true'></i>  : <span id='nom-user'>"+nomUser +" </span></h3>";
// console.log(user_input);
//  console.log(user_input.value);
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
 
    ajouterQuestion(questions[currentIndex],questionCount);
   
  // next.setAttribute("hidden", true);

  submit.onclick=function(){
   if(currentIndex==0){
    retour.style.display="block";
   }
    
    
    
    let reponsrvraix=questions[currentIndex].vrai;
    // console.log('check answer');
     currentIndex++;
    compareReponse(reponsrvraix,currentIndex);

       //remove old question
       title.innerHTML='';
       answers.innerHTML='';
//get autre question
ajouterQuestion(questions[currentIndex],questionCount);
  // if(currentIndex==questionCount){
  //   quizBar.classList.remove('active');
  //   resultat.classList.add('active');
  //   title.innerHTML='votre score est';
  //   answers.innerHTML='1/'+questionCount;
  // } 
 afficherResultat(questionCount);
 

  };

})


//retour btn


retour.onclick=function(){
   
    // alert(currentIndex);
 

      currentIndex--;
   
    // console.log(totalReponseVraix);
//   let reponsrvraix=questions[currentIndex].vrai;


//   compareReponse(reponsrvraix,currentIndex);

     title.innerHTML='';
     answers.innerHTML='';

ajouterQuestion(questions[currentIndex],questionCount);

// afficherResultat(questionCount);


};


//fin retour btn


function ajouterQuestion(quest,count){
 if(currentIndex==0) {
  retour.style.display="none";
 }
 if(currentIndex<count){
    //crer le titre de question
    let questionTitre=document.createElement("h2");
    //crer le text de question
    let questionText=document.createTextNode(quest.question);
    
    // console.log(questionTitre);
    // console.log(questionText);
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

var arrayshowQuest=[];


function compareReponse(answer,index){
  // console.log(answer);
  // console.log(count);

  let lesReponse=document.getElementsByName("question");
  let ReponseChoisi;
  // console.log(lesReponse);
 for(let i=0;i<lesReponse.length;i++){
  // console.log(lesReponse[i]);
  if(lesReponse[i].checked){
    ReponseChoisi=lesReponse[i].dataset.option;
    if(answer==ReponseChoisi){
      
      arrayshowQuest.push(index-1);
    //  console.log(arrayshowQuest);
    //remove double correct answer
    // arrayshowQuest=[... new Set(arrayshowQuest)];
      console.log(arrayshowQuest);
    //  console.log(questions[index-1].explication);
  
    }
   
  }
 }

 console.log(`corect is':${answer}`);
 console.log(`choisi is':${ReponseChoisi}`);

 if(answer==ReponseChoisi){
  // alert("vrais");
  totalReponseVraix++;

 }

// console.log(totalReponseVraix);
}

function afficherResultat(count){

  if(currentIndex===count){
    //supp titre de quiz
     title.remove();
     info_title.remove();     //
     let nomUser=user_input.value;
     if (totalReponseVraix==count){ 

      
      answers.innerHTML = '<span id="nom-user">'+nomUser +'</span> congratulation! 🎉, You got '+ totalReponseVraix +'</p> out of <p>'+ count +'</p></span>';

  }
  else if(totalReponseVraix >=(count/2) ){
    answers.innerHTML= '<span id="nom-user">'+nomUser +'</span>   nice 😎, You got '+ totalReponseVraix +' out of '+ count +'</span>';
      
  }
  else { 
    answers.innerHTML= '<span id="nom-user">'+nomUser +'</span>  sorry 😐, You got only '+ totalReponseVraix +' out of '+ count +'</span>';
      
  }
    // answers.innerHTML=`<span>Votre score est : ${totalReponseVraix}/${count}</span>`;
if(arrayshowQuest.length>0){
  answers.innerHTML+='<h3>Votre Explication est:</h3>';
  for(i=0;i<arrayshowQuest.length;i++){
    answers.innerHTML+= "<p>la question N°:"+(i+1)+"</p>";
    answers.innerHTML+= "<p calss='explication'>explication"+questions[arrayshowQuest[i]].explication+"</p>";
  }
}
    
   

    









    submit.style.display="none";
    retour.style.display="none";
    quizBar.classList.remove('active');
    resultat.classList.add('active');
    replay.style.display="block";
    replay.addEventListener('click',function(){
     
      window.location.reload();
    });
    
  }

  
}

function removeBtnNext(){
  next.style.display="none";
  if(currentIndex>0){
    retour.style.display="block";
  }
  submit.style.display="block";
 

}