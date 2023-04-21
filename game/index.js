

let enemiesContainer = document.getElementById('enemies-container');

for(let i=0; i<6; i++){
    enemiesContainer.innerHTML += `
    <div class="ship">
                <img src="../assets/enemy_ship.png" alt="our ship">
                <section class="ship-info">
                    <div class="text-line">USS SHIP</div>
                    <div class="text-line">
                        <div>Health</div>
                        <div class="health-value">50</div>
                    </div>
                    <div class="text-line">
                        <div>Strength</div>
                        <div class="health-value">20</div>
                    </div>
                    <div class="text-line">
                        <div>Accuracy</div>
                        <div class="health-value">.7</div> 
                        <!-- 70% chance you DO hit the enemy ship. 30% chance you DONT hit -->
                    </div>
                </section>
    </div>
    `
}