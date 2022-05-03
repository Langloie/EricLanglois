// Earth has been attacked by a horde of aliens! You are the captain of the USS Assembly, on a mission to destroy every last alien ship.

// Battle the aliens as you try to destroy them with your lasers.

// There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.

// Aliens vs Humans - GAME

// {H}: GO First
//  Only can Attack in Order

// After DestroyedShip = option2retreat

// {A}: 6 ships

// ship ={
// hull:
// firepower:
// accuracy:
// }

// Guile Throw https://onlinegiftools.com/images/examples-onlinegiftools/sonic-boom.gif

// https://www.fightersgeneration.com/characters/charlie-sonicshell.gif

// ----{  coudla done this  }
// function Alien(lifePoints,firePower,accuracy){
//     this.lifePoints = lifePoints
//     this.firePower = firePower
//     this.accuracy = accuracy
// }

let USS_HolaMundo = {
    lifePoints: 20,
    firepower: 5,
    accuracy: .7,
    attackAlien: function(){
      let enemyPosition = prompt(" Ready To Attack? ");
  
      if (enemyPosition === "y") {
        let relevantTarget = document.querySelector(".counter");
        let bomb = document.createElement("img");
        bomb.setAttribute(
          "src",
          "https://i.gifer.com/origin/d7/d7ac4f38b77abe73165d85edf2cbdb9e_w200.gif"
        );
        bomb.style.height = "60px";
        relevantTarget.replaceWith(bomb);
        
        console.log("ATTACKING!>!>!!!");
    
        let ship = document.querySelector(".ussr");
        ship.classList.toggle("pOneAttack");
        // let x = document.getElementById()
      }
    }
  };
  
  let alien1 = {
    lifePoints: Math.floor(Math.random() * (7 - 3) + 3),
    firepower: Math.floor(Math.random() * (5 - 2) + 2),
    accuracy: Math.random() * (.8 - .6) + .6,
  };
  
  let alien2 = {
    lifePoints: Math.floor(Math.random() * (7 - 3) + 3),
    firepower: Math.floor(Math.random() * (5 - 2) + 2),
    accuracy: Math.random() * (.8 - .6) + .6,
  };

  let alien3 = {
    lifePoints: Math.floor(Math.random() * (7 - 3) + 3),
    firepower: Math.floor(Math.random() * (5 - 2) + 2),
    accuracy: Math.random() * (.8 - .6) + .6,
  };

  let alien4 = {
    lifePoints: Math.floor(Math.random() * (7 - 3) + 3),
    firepower: Math.floor(Math.random() * (5 - 2) + 2),
    accuracy: Math.random() * (.8 - .6) + .6,
  };

  let alien5 = {
    lifePoints: Math.floor(Math.random() * (7 - 3) + 3),
    firepower: Math.floor(Math.random() * (5 - 2) + 2),
    accuracy: Math.random() * (.8 - .6) + .6,
  };

  let alien6 = {
    lifePoints: Math.floor(Math.random() * (7 - 3) + 3),
    firepower: Math.floor(Math.random() * (5 - 2) + 2),
    accuracy: Math.random() * (.8 - .6) + .6,
  };

  let alienGang = [alien1, alien2, alien3, alien4, alien5, alien6];

  let alienAttackPlayer = () =>{
    let playerHull = document.querySelector('.health');
    for(let i = 0; i<alienGang.length;i++){
      let attackingAlien = document.querySelector('.counter');
      console.log(attackingAlien[i]);
      if(attackingAlien !== null){
        if(Math.random() < alienGang[i].accuracy){
          playerHull.innerHTML -= alienGang[i].firepower;
          break;
        }else{
          console.log('Alien Missed');
          break;
        }
      }

      let ship = document.querySelectorAll(".ufo")[i];
      ship.classList.toggle("alienAttack");
    }
  


    //if ship has no health, toggle image to explosion
    if(playerHull.innerHTML <= 0){
      let bomb = document.createElement("img");
      bomb.setAttribute(
        "src",
        "https://i.gifer.com/origin/d7/d7ac4f38b77abe73165d85edf2cbdb9e_w200.gif"
      );
      bomb.style.height = "140px";
      playerHull.replaceWith(bomb);
      }
    


    // let x = document.getElementById()
    console.log(playerHull);

    //if all ships are destroyed then prompt to play again
    if(document.querySelector(".health") === null){
      let restart = prompt("You lose! Play again?");
        if(restart === 'y'){
          window.location.reload();
        }
      }
  }
  

  
  const showDirections = () => {
    alert(
      "Earth has been attacked by a horde of aliens! You are the captain of the USS HelloWorld, on a mission to destroy every last alien ship.Battle the aliens as you try to destroy them with your lasers.There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat."
    );
  };
  

  //aliens
  //randomly generates hull between 3 and 6
  //randomly generates firepower between 2 and 4
  //randomly generates accuracy between .6 and .8
  createAlien = () =>{ 

    for(let i = 0; i<alienGang.length;i++){
      let alienTarget = document.querySelectorAll(".counter");
      alienTarget[i].innerHTML = alienGang[i].lifePoints;
    }
  }
  createAlien();


  const attackAlien = () => {
    // targetAlien & decrease Points
    let enemyPosition = prompt(" Ready To Attack? (Press y for yes)");
  
    if (enemyPosition === "y") {
      let relevantTarget = document.querySelector(".counter");
      
      //player has a chance to miss their attack
      if(Math.random() < USS_HolaMundo.accuracy){
        relevantTarget.innerHTML -= USS_HolaMundo.firepower;
      }
      else{
        console.log('Missed');
      }

      //if ship has no health, toggle image to explosion
      if(relevantTarget.innerHTML <= 0){
        let bomb = document.createElement("img");
        bomb.setAttribute(
          "src",
          "https://i.gifer.com/origin/d7/d7ac4f38b77abe73165d85edf2cbdb9e_w200.gif"
        );
        bomb.style.height = "60px";
        relevantTarget.replaceWith(bomb);
        }
      console.log("ATTACKING!>!>!!!");
  
      let ship = document.querySelector(".ussr");
      ship.classList.toggle("pOneAttack");
      // let x = document.getElementById()
      console.log(relevantTarget);

      //if all ships are destroyed then prompt to play again
      if(document.querySelector(".counter") === null){
        let restart = prompt("You win! Play again?");
          if(restart === 'y'){
            window.location.reload();
          }
        }

        alienAttackPlayer();
    }
  };
  
  const objTest = (nput) =>{
      console.log(nput.email)
  }
  
  let me = {
      name: "Jordan",
      email: "a@a.com"
  }
  