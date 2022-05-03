

const clickMoveUp = document.getElementById('up');
clickMoveUp.addEventListener('click',()=>{
    let getClass = document.querySelector('.pacman');
    getClass.classList.toggle('moveUp');
})

const clickMoveDown = document.getElementById('down');
clickMoveDown.addEventListener('click',()=>{
    let getClass = document.querySelector('.pacman');
    getClass.classList.toggle('moveDown');
})

const clickMoveLeft = document.getElementById('left');
clickMoveLeft.addEventListener('click',()=>{
    let getClass = document.querySelector('.pacman');
    getClass.classList.toggle('moveLeft');
})

const clickMoveRight = document.getElementById('right');
clickMoveRight.addEventListener('click',()=>{
    let getClass = document.querySelector('.pacman');
    getClass.classList.toggle('moveRight');
})