const card = document.getElementById('card');
const display = document.getElementById('answer');
const total = document.getElementById('total');
let score = 0;
card.addEventListener('click',()=>{
    let answer = prompt('did you type yes?');
    console.log('yes');
    if(answer === 'yes'){
        display.innerHTML = 'Correct';
        score +=1;
        total.innerHTML = score;

    }
    else{
        display.innerHTML = 'False';
    }
})