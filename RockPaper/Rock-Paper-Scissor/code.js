let icons = document.querySelectorAll('.icon-container .icon');
let selection = document.querySelector('.selection-container');
let results = document.querySelector('.result');

let arr = [['rock','fa-solid fa-hand-back-fist'],['paper','fa-solid fa-hand'],['scissor','fa-solid fa-hand-scissors']];
for(let i=0;i<icons.length;i++)
{
    icons[i].addEventListener('click', function(){
        let playerChoice = arr[i][0];
        let ran = Math.floor(Math.random()*3);
        let compChoice = arr[ran][0];
        selection.innerHTML = `<div class="you"><h2>you</h2><div class="icon"><i class='${arr[i][1]}'></i></div></div>
        <div class="comp"><h2>Comp</h2><div class="icon"><i class='${arr[ran][1]}'></i></div></div>`;
        
        if(playerChoice === compChoice)
        {
            results.innerText= 'DRAW';
        }
        else if((playerChoice === 'paper' && compChoice == 'rock') || 
                (playerChoice === 'rock' && compChoice === 'scissor') || 
                (playerChoice === 'scissor' && compChoice === 'paper'))
                {
                    results.innerText = 'YOU WIN';
                }
        else{
            results.innerText = 'YOU LOST';
        }
    })
}