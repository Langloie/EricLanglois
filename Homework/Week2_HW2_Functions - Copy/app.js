// 1. Write a JavaScript function that displays the larger of two integers
const biggerOfTwo = () => {
    let flag = true;
    let num1, num2;
    let answer = "";
    const solution = document.querySelector(".solution");
    while (flag) {
      num1 = parseInt(prompt("Enter your first number"));
      num2 = parseInt(prompt("Enter your second number"));
      if (num2) flag = false;
    }
    if (num1 > num2) {
      answer = `${num1} is greater than ${num2}`;
    } else if (num1 < num2) {
      answer = `${num2} is greater than ${num1}`;
    } else {
      answer = `${num1} is equal to ${num2}`;
    }
    solution.textContent = answer;
  };  


const printToScreen = (info) =>{
    let screen = document.querySelector('.screen');
    screen.innerHTML = info;
}


//get fake data in json format
//   const getPics = () =>{
//       url = 'https://jsonplaceholder.typicode.com/photos'

//       fetch(url)
//         .then(response => response.json())
//         .then(json => console.log(json));
//         //.then(json => printToScreen(json));

//         data.forEach(photo=>{
//             console.log(photo.url);
//             printToScreen(photo);
//         })

//   }

const getPics = () => {
    let screen = document.querySelector('.screen')
    
    //create div
    bharati = document.createElement('div');
    //give element text
    bharati.innerHTML = "hi";
    //put element on screen
    screen.appendChild(bharati);
}