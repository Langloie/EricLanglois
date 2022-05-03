
let key = 'Enter your API Key In Here'

const createReservation = () => {
  let resConfirmed = prompt('Do you have a reservation ? ')
  if (resConfirmed === 'yes') {
    console.log('Cool Reservation Booked!')

    let hiddenDiv = document.querySelector('.peekaboo')

    hiddenDiv.innerHTML = 'Reservation Booked! '
  } else {
    alert('You Need To Make A reservation')
  }
}


const julian = () => {
  let noodle = document.querySelector('.mainTitle')
  noodle.classList.toggle('wexler2')
}


//syntactic sugar
// async / await
//document
//function

//async function()
//function async = () =>


//how to make the fetch function with async and await
const meetTeam = async () => {
    //try catch method to console log if something went wrong for the fetch request
    try{
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    //code under await will not execute until the fetch request is complete
    let info = await response.json();

    info.forEach((element) => {
        // Create a new div for each element of the array
        let divEl = document.createElement("div");
        // Set attributes to each div
        divEl.setAttribute("class", "profileCard");
        // Append each div we created to the body
        document.body.append(divEl);
        // Add the data
        divEl.append(element.name);
    } }catch(error){
        console.log('something went wrong');
    }



}

const go = () => {
  setInterval(() => {
    console.log('Uhhh')
  }, 3000)
}

// const meetTeam = () => {
//     // Returns a promise
//     return fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json()) // This is a promise in readable stream
//       .then((json) => {
//         let info = json; // This is the data as an array
//         console.log(info);
//         // Loop over all the elements of the array
//         info.forEach((element) => {
//           // Create a new div for each element of the array
//           let divEl = document.createElement("div");
//           // Set attributes to each div
//           divEl.setAttribute("class", "profileCard");
//           // Append each div we created to the body
//           document.body.append(divEl);
//           // Add the data
//           divEl.append(element.name);
//         });
//       });
//   };
  // 1. Need to select an element to add an event listener to
  const btnElment = document.querySelector(".btnChefs");
  // 2. Define what type of event we want to add
  // click
  btnElment.addEventListener("click", meetTeam);
  // 3. Define which function to couple to the event
  ///////// Event object
  // 1. Select the element to attach
  // 2. Add listener to the button
  // newBtn.addEventListener("click", (e) => {
  //   console.log(this);
  //   console.log(e.currentTarget);
  // });
  const newBtn = document.querySelector("#btnOrder");
  /// Creating element
  newBtn.addEventListener("click", function () {
    // 1. Create a new <li>
    let liEl = document.createElement("li");
    // Add content to the new element
    liEl.innerHTML = "Order List";
    // 2. log that new element to the screen
    //   console.log(liEl);
    // Add element onto the body
    const divEl = document.querySelector(".screen");
    // Append element to the screen
    divEl.append(liEl);
  }); 
  
  // Select the btn
const btnInput = document.querySelector(".btn-input");
btnInput.addEventListener("click", () => {
  // Create li element
  let liEl = document.createElement("li");
  // Take input from users
  const inputEl = document.getElementById("user-data");
  // Take input from user
  const inputData = inputEl.value;
  inputEl.value = "";
  liEl.innerHTML = inputData;
  // Add element onto the body
  const divEl = document.querySelector(".screen");
  // Append element to the screen
  divEl.append(liEl);
}); 