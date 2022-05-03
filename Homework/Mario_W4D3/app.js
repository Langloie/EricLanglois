const attackMario = () =>{
    let shroomDude = document.querySelector('.shroom');
    shroomDude.classList.toggle('initiateAttack');
}

const jump = () =>{
    let mario = document.querySelector('.plumber');
    mario.classList.toggle('jumpMario');
}

let score = 0;

const addPoint = () =>{
    let ticker = document.querySelector('.point');
    score +=1;
    ticker.innerHTML = score;
}