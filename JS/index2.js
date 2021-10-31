
let playerName = localStorage.getItem("jugadorName");
if( playerName == null ) {
    playerName = prompt("NOMBRE DEL JUGADOR");
    localStorage.setItem("jugadorName", playerName);
}
//-------------------------------------
const player = {
    nombre: playerName,
    puntos: 0
}

const playerJSON = JSON.stringify(player);

localStorage.setItem("player0",  playerJSON);

let playerGet = localStorage.getItem("player0");

const player2 = JSON.parse(playerGet);


//-------------------------------------

let nuevoParra = document.createElement("p");
let textName = document.createTextNode(player2.nombre); 
let newDatoName = document.getElementById("jugadorName");

newDatoName.appendChild(nuevoParra);
nuevoParra.appendChild(textName);

let nuevoParraScore = document.createElement("p");
let score = document.createTextNode(player2.puntos); 
let newDatoScore = document.getElementById("jugadorScore");

newDatoScore.appendChild(nuevoParraScore);
nuevoParraScore.appendChild(score);

