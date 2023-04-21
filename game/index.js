
class Ship {
    constructor(health, strength, accuracy){
        this.health = health;
        this.strength = strength;
        this.accuracy = accuracy
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

let myShip = new Ship(50, 15, .7);

let Borg = new Enemy('borg');

Borg.addShip(25, 7, .6);
Borg.addShip(20, 6, .6);
Borg.addShip(29, 7, .6);
Borg.addShip(22, 3, .6);
Borg.addShip(23, 7, .6);
Borg.addShip(28, 4, .6);

console.log(Borg.ships);


/*  Borg.ships = [
    {health: 25, strength: 7, accuracy: 0.6},   0
    {health: 25, strength: 7, accuracy: 0.6},   1
    {health: 25, strength: 7, accuracy: 0.6},   2
    {health: 25, strength: 7, accuracy: 0.6},   3
    {health: 25, strength: 7, accuracy: 0.6},   4
    {health: 25, strength: 7, accuracy: 0.6},   5
]
*/




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


const playGame = () => {
    
}
