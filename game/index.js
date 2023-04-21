
class Ship {
    constructor(health, strength, accuracy){
        this.health = health;
        this.strength = strength;
        this.accuracy = accuracy
    }
    attack(shipBeingAttacked){
        // do some attack logic
        shipBeingAttacked.health -= this.strength
    }
}
class Enemy {
    constructor(name){
        this.name = name;
        this.ships = []
    }
    addShip(health, strength, accuracy){
        let newShip = new Ship(health, strength, accuracy)
        this.ships.push(newShip)
    }
}

let myShip = new Ship(50, 50, .7);

let Borg = new Enemy('borg');

Borg.addShip(25, 7, .6);
Borg.addShip(20, 6, .6);
Borg.addShip(29, 7, .6);
Borg.addShip(22, 3, .6);
Borg.addShip(23, 7, .6);
Borg.addShip(28, 4, .6);

console.log(Borg.ships);


/*  Borg.ships = [
    {health: 10, strength: 7, accuracy: 0.6},   0
    {health: 25, strength: 7, accuracy: 0.6},   1
    {health: 25, strength: 7, accuracy: 0.6},   2
    {health: 25, strength: 7, accuracy: 0.6},   3
    {health: 25, strength: 7, accuracy: 0.6},   4
    {health: 25, strength: 7, accuracy: 0.6},   5
]
*/


let gameData = {
    indexOfCurrentShip: 0,
    gameIsOver: false,
    ourTurn: true,
    currentShip: Borg.ships[0]
}


const setupGame = () => {
    console.log(myShip);
    // put values of our ship
    let myShipHealth = document.querySelector("#our-ship-container .health-value");
    myShipHealth.textContent = myShip.health;
    let myShipStrength = document.querySelector("#our-ship-container .strength-value");
    myShipStrength.textContent = myShip.strength;
    let myShipAccuracy = document.querySelector("#our-ship-container .accuracy-value");
    myShipAccuracy.textContent = myShip.accuracy;


    let enemiesContainer = document.getElementById('enemies-container');
    for(let i=0; i<Borg.ships.length; i++){
        enemiesContainer.innerHTML += `
        <div class="ship">
                    <img src="../assets/enemy_ship.png" alt="our ship">
                    <section class="ship-info">
                        <div class="text-line">Enemy ${i+1}</div>
                        <div class="text-line">
                            <div>Health</div>
                            <div class="health-value">${Borg.ships[i].health}</div>
                        </div>
                        <div class="text-line">
                            <div>Strength</div>
                            <div class="strength-value">${Borg.ships[i].strength}</div>
                        </div>
                        <div class="text-line">
                            <div>Accuracy</div>
                            <div class="accuracy-value">${Borg.ships[i].accuracy}</div> 
                            <!-- 70% chance you DO hit the enemy ship. 30% chance you DONT hit -->
                        </div>
                    </section>
        </div>
        `
    }
}
setupGame()


const reset = () => {
    gameData = {
        indexOfCurrentShip: 0,
        gameIsOver: false,
        ourTurn: true,
        currentShip: Borg.ships[0]
    }
}


let htmlHealthArray = document.querySelectorAll('#enemies-container .health-value');
console.log(htmlHealthArray);

const doOurTurn = () => {
    console.log(myShip);
    console.log(Borg.ships)
    console.log(gameData);
    
    myShip.attack(Borg.ships[gameData.indexOfCurrentShip]);
    gameData.ourTurn=false
    htmlHealthArray[gameData.indexOfCurrentShip].textContent = Borg.ships[gameData.indexOfCurrentShip].health
    
    if (Borg.ships[gameData.indexOfCurrentShip].health > 0) {
        addMessage(`Enemy ship health is ${Borg.ships[gameData.indexOfCurrentShip].health}`)
    } else {
        addMessage(`Enemy ship destroyed!`)
        if (gameData.indexOfCurrentShip === Borg.ships.length-1) {
            prompt('you win!')
        } else {
            gameData.indexOfCurrentShip++
            // currentShip = Borg.ships[gameData.indexOfCurrentShip+1] INVESTIGATE THIS ISSUE (NOT UPDATING)
            addMessage(`Moving to next ship! Enemy Number ${gameData.indexOfCurrentShip+1}`)
        }
    }
}

const doEnemyTurn = () => {
        gameData.currentShip.attack(myShip);
        let myShipHealth = document.querySelector("#our-ship-container .health-value");
        myShipHealth.textContent = myShip.health
        addMessage(`You were hit! Your Health is now ${myShip.health}`)
        // check if my ship is destroyed (we lose)
        if (myShip.health < 0) {
            prompt("you lose!")
        } else {
            gameData.ourTurn = true;
        }

}

const next = () => {
    if (gameData.ourTurn) {
        doOurTurn()
    } else {
        doEnemyTurn()
    }
}

let nextButton = document.getElementById('next');
nextButton.addEventListener('click', next)


const addMessage = (text) => {
    let messagesContainer = document.getElementById('messages');

    messagesContainer.innerHTML += `<p>${text}<p>`
}

const startGame = () => {

    
    // our ship attacks

    // update enemy ship data
    // update HTML
    
    // put new message



    // check if enemy ship is alive
    // IF NO - check if this is the last ship (we win)
    // not last ship - move to next ship
    // IF YES 
    // enemy attacks
    // update our ship data
    // check if OUR ship is alive
    // IF NO - (we lose)
    // IF YES - attack again

    // put new message


}

let playButton = document.getElementById('play')

playButton.addEventListener('click', (e) => {
    e.target.disabled = true;
    let nextButton = document.getElementById('next')
    nextButton.disabled = false;
    let resetButton = document.getElementById('reset')
    resetButton.disabled = false;
    doOurTurn()
})