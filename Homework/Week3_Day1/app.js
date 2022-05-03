let uhVariable = "somethingLikeThis"

const thisIsAFunction = () =>{
    console.log("Function Executed!")
}

const goGetData = () => {
    fetch('https://fakestoreapi.com/products/categories')
    .then(res =>res.json()).then((json)=>{
        console.log(json)
        let bday = prompt("Enter Number 1-4")
        document.querySelector('.title').innerHTML = json[1];
    })
}

const goGetData2 = () => {
    fetch('https://fakestoreapi.com/users')
    .then(res =>res.json()).then((json)=>{
        console.log(json)
        document.querySelector('.title').innerHTML = json[0].email;
    })
}

const getData3 = () => {
    fetch(`http://www.omdbapi.com/?t=${tv}&apikey`)
        .then(response => response.json())
        .then((json)=>{
            let bigData = json
            console.log(bigData)
        })
}

const toggleElement = () =>{
    //change color of text
    let screen2 = document.querySelector('.hidden')

    screen2.classList.toggle('showScreen')
}