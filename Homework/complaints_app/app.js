
//get data from input box
const getInput = (v) =>{
  let val = document.querySelector('.complaints').value;
  return val;
}

let inputVal = getInput();

console.log(inputVal)

//click box to get data from a borough
//agency = NYPD
//if(innerHTML === apiData.borough)
//report desciptor
//some complaints do not have a resolution description
const url = 'https://jsonplaceholder.typicode.com/users'
async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

data = getData();
console.log(data)




//filter the data to report the specific borough



//output the data to the hidden div
//create div with image, title, and button for summary

