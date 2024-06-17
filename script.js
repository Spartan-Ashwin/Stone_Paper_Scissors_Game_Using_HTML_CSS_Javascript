let matchUpdate={
    won:0,
    lost:0,
    tie:0
};

let stonebtn=document.querySelector('.stonebtn');

stonebtn.addEventListener('click',()=>{

    let ele=document.querySelector('.result');
    ele.innerHTML="";

         let randomNum=getRandomNumber();

         checkResult(1,randomNum);
})

let scissorbtn=document.querySelector('.scissorbtn');

scissorbtn.addEventListener('click',()=>{

    let ele=document.querySelector('.result');
    ele.innerHTML="";

         let randomNum=getRandomNumber();

         checkResult(2,randomNum);
})

let paper=document.querySelector('.paper');

paper.addEventListener('click',()=>{

    let ele=document.querySelector('.result');
    ele.innerHTML="";

         let randomNum=getRandomNumber();

         checkResult(3,randomNum);
})









function checkResult(userChoice,computerChoice){


       let ele=document.querySelector('.result');
        let img=document.createElement('img');
        let choice=document.createElement('div');
        let result=document.createElement('div');


        

     if(userChoice==computerChoice){
        let choosen;
        if(computerChoice==1){
            img.src="stone.jpg"
            choosen='Stone';
        }else if(choosen==2){
            img.src="scissor.jpg"
            choosen='Scissor';
        }else{
            img.src="paper.png"
            choosen='Paper';
        }
       choice.innerHTML=`Computer Choose ${choosen}`;
       result.innerHTML="Match is Tie"
       result.style.backgroundColor="yellow"
       matchUpdate.tie+=1;

     }else if(computerChoice==1){

        choice.innerHTML="Computer Choose Stone"
        img.src='stone.jpg';
        if(userChoice==3){
            result.innerHTML="You Won the Match"
            result.style.backgroundColor="green"
            matchUpdate.won+=1;
        }else{
            result.innerHTML="You Lost the Match";
            result.style.backgroundColor="red"
            matchUpdate.lost+=1;
        }
     }else if(computerChoice==2){

        choice.innerHTML="Computer Choose Scissor"
        img.src='scissor.jpg';
        if(userChoice==1){
            result.innerHTML="You Won the Match"
            result.style.backgroundColor="green"
            matchUpdate.won+=1;
        }else{
            result.innerHTML="You Lost the Match"
            result.style.backgroundColor="red"
            matchUpdate.lost+=1;
        }


     }else{

        choice.innerHTML="Computer Choose Paper"
        img.src='paper.png';
        if(userChoice==2){
            result.innerHTML="You Won the Match"
            result.style.backgroundColor="green"
            matchUpdate.won+=1;
        }else{
            result.innerHTML="You Lost the Match"
            result.style.backgroundColor="red"
            matchUpdate.lost+=1;
        }

     }

     choice.style.fontSize="30px";
     choice.style.fontWeight="bold";

     img.width="100";
     img.height="80";
     img.style.display="block"
     img.style.margin="auto";

     result.style.display="inline"
     result.style.fontSize="30px"


     let update=document.createElement('div');

     update.innerHTML=`won : ${matchUpdate.won}, lost : ${matchUpdate.lost}, tie : ${matchUpdate.tie}`
     update.style.fontSize="35px";
    
     ele.appendChild(choice);
     ele.appendChild(img);
     ele.appendChild(result)
     ele.appendChild(update);

}





function getRandomNumber(){

    return Math.floor(Math.random()*3)+1;
}