let txt = "ABCDE";

txt.length; //lenth would be 5 since its the amount of characters in the string

console.log(txt.length);

const fruits = ["banana","orange","apple"];

console.log(fruits)

//appends kiwi to fruit
fruits.push("kiwi");

console.log(fruits)


//dom is the document (html) which can be referred to with other files for the webpage
//document object model
//how all the objects are formatted and how they can be manipulated or interacted with

//dom manipulation (2 methods, directly and indirectly)

//Direct Approach
// a) querySelector
// b) document.getElementById 
// c) document.write
// d) querySelector

//get text

//looks for tag under class title (dont confuse with title in head tag) 
//<h1 class="title"> jordan barbershop</h1>
const variableThatGetsTitle = document.querySelector(".title");
//console.log prints h1.title

//gets text of h1 tag
//querySelector(".title").innerHTML
//console.log prints Jordan's Barbershop

//change text on webpage
// let switch_text = document.querySelector(".title");
// console.log(switch_text)
// switch_text.innerHTML = "Something Completely Different"


//this is a function syntaxically
//topic parameter has any data type
const changeTitle = (topic) => {
    let switch_text= document.querySelector(".title");
    switch_text.innerHTML = topic;
}

//this method is the old method of defining functions
//function(){
//    whatever
//}

//calling a function properly
changeTitle();




//html code for an action to occur when button is clicked
<button onclick="changeTitle('This just changed')"> click button </button>

//css
//button{
//    text-align:center
//}
//buttonContainer{
//     display:flex;
//     justify-content: spaced-evenly;
// }

//const addToCart = () =>{
    //recognize item
    document.querySelector(.enter);
    
    //take the itemname -> add2Cart
    //display new result of cart now that something has been added
    

    //number holder 
}