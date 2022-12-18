 const computerChoiceDisplay = document.getElementById('computer-choice')
 const userChoiceDisplay = document.getElementById('user-choice')
 const resultDisplay  = document.getElementById('result')
 const possibleChoices = document.querySelectorAll('button')
 let userSelection
 let computerSelection
 let result
  
 
 possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener('click',(e)=>{
    userSelection=e.target.id
    userChoiceDisplay.innerHTML= userSelection 
    generateComputerChoice()
    playRound()
 }))
 function generateComputerChoice(){
const randomNumber = Math.floor(Math.random()*possibleChoices.length)+1;

if (randomNumber === 1) {
    computerSelection = 'rock'
}
if (randomNumber === 2) {
    computerSelection ='paper'
}
if (randomNumber === 3) {
    computerSelection ='scissors'
}
 computerChoiceDisplay.innerHTML = computerSelection
 }
 
  
  
 function playRound(){
      
    if ((userSelection === 'rock' && computerSelection === 'scissors') ||
        (userSelection === 'scissors' && computerSelection === 'paper')||
        (userSelection === 'paper' && computerSelection === 'rock')){
       
      result = ('You Win');
      }  
     else if (userSelection === computerSelection){  
     result = ('Its a tie');
     }
     
     else if ((userSelection === 'rock' && computerSelection === 'paper') ||
     (userSelection === 'scissors' && computerSelection === 'rock')||
     (userSelection === 'paper' && computerSelection === 'scissors')) {
         
     result = ('you lose');
     }
     resultDisplay.innerHTML =result
    }
    
     

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 