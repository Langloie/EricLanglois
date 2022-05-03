//our ship
let USSAssembly = {
    dodge: ()=>{
        //allows ship to retreat
    }
}

const battle=()=>{
  let playerOneScore = 100;

  let alienScore = 100;

  console.log('battle started');
  let command = prompt('Ready to [A]ttack? or [R]etreat?');
    if(command === "A"){
        let target = document.querySelector('.ufo');
        
        let explosion = document.createElement('img');
        explosion.setAttribute('src','https://previews.123rf.com/images/chupakabrajk/chupakabrajk1810/chupakabrajk181000231/110715125-broken-ufo-ufo-crash-vector-illustration-hand-drawn-cartoon-ufo-.jpg')
        
        
        target.replaceWith()
        //signal explosion


        //decrease alien point value



    }else{
        console.log('player one has retreated')
    }


}



let alienFleet = [];


//round => each player gets to attack

//click fireball
const clickFire = document.querySelector('.fireButton');
clickFire.addEventListener('click',()=>{
    let getClass = document.querySelector('.fireball');
    getClass.classList.toggle('fireBlast');
})

let ourShip = {
    hull: 20,
    firepower: 5,
    accuracy: .7
}

