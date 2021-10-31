
function applyAnimation( e ) {
  
    let content = document.getElementById("contentInicio");
    
    content.className = "";
    content.classList.add( e.target.id );
    
  }
  /*
  document.getElementById("appears").addEventListener( "click", applyAnimation, false );
  document.getElementById("cross").addEventListener( "click", applyAnimation, false );
  */
  document.getElementById("contentInicio").classList.add("appears");

	$(".setuser button").click(function(){
		let desiredName = $(".setuser .username").val();
		if(desiredName !== "" && desiredName !== null){
			$(".setuser").fadeOut(1000);
      localStorage.setItem("nombre", desiredName  )
		}else{
			alert("Porfavor elija un nombre");
		}
	});

  /*
let playerName = localStorage.getItem("jugadorName");
if( playerName == null ) {
    playerName = desiredName
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
nuevoParraScore.appendChild(score);*/