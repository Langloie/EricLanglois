//select elements

const wrapperElement = document.querySelector('.wrapper');
const minuteInput = document.querySelector('.minutes');
const secondInput = document.querySelector('.seconds');

//dom manipulation





//add functionality

//13 is the code for enter key pressed
//focus() moves cursor
minuteInput.addEventListener('keydown',(e)=>{
    if(e.keyCode === 13){
        secondInput.focus();
    }
});

//add event listener to the second box
secondInput.addEventListener('keydown',(e)=>{
    //initialize minutes and seconds
    let minutes = 0;
    let seconds = 0;

    //start clock after enter is pressed
    if(e.keyCode === 13){
        let minuteValue = minuteInput.value;
        let secondValue = secondInput.value;
        
        //show starting values of clock
        minuteInput.value = String(minutes).padStart(2,"0");
        secondInput.value = String(seconds).padStart(2,"0");
    
        const secondId = setInterval(()=>{
            seconds++;

            //if seconds go to 60, add 1 minute to minutes
            if(Number(seconds)===60){
                ++minutes;
                minuteInput.value = String(minutes).padStart(2,"0");
                seconds = 0;
            }

            //verify that minutes and seconds equal the timer
            if(minutes === Number(minuteValue) && seconds === Number(secondValue)){
                //stop the timer
                clearInterval(secondId);
                //change background
                wrapperElement.classList.add('red-class');
            }
            //else
            secondInput.value = String(seconds).padStart(2,"0");
        },1000)
    
    }


})