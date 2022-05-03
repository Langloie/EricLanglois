const createReservation = () => {


    let resConfirmed = prompt('Do you have a reservation?');
    if(resConfirmed === 'yes'){
        console.log('Cool Reservation Booked');
        
        let hiddenDiv = document.querySelector('.peekabo');
        
        hiddenDiv.innerHTML = "Reservation Booked!";
       
    }
    else{
        alert('You need to make a reservation.');
    }
}

const julian = () => {
    let noodle = document.querySelector('.wexler');
    noodle.classList.toggle('wexler');
}