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
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4eb9abf8`)
        .then(response => response.json())
        .then((json)=>{
            let bigData = json
            console.log(bigData)


            let show = {
                name: tv,
                title: info.Title,
                year: info.year,

            }


        })
}

let screen = document.querySelector('.retainer');

let insertable = document.createElement('div').innerHTML='';

const switchIt = () => {
    screen.classList.toggle('dopeButtonStyle');
}


const letitSlide = () => {
    let obj = document.querySelector('.tland');
    obj.classList.toggle('useSkwables');
}

