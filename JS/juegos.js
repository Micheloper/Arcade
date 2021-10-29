
//Contastar si todas las celulas fueran atrapadas
const celulas = document.querySelectorAll(".celula");
//Variable boleano para alterar al decurrir del turno del jugador
let checkTurno = true;
//Caracter de los jugadores
const JUGADOR_X = "X";
const JUGADOR_O = "O";
//Combinaciones que hace el jugador ganar
const COMBINACIONES = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let maxPoints = 90;

// celulas = document.addElementByClassName("celula")
// celulas.addEvetListener("")
//Elemento de intereaccion o en el caso un Evento
document.addEventListener("click", (event) => {
    console.log("CLLLLL");
    //Identificar si el click esta dentro de una celula. Si hay una identificacion con el click en la clase celula aparecera el numero del ID en console.log
    if(event.target.matches(".celula")) {
        //console.log(event.target.id);
        jugar(event.target.id);
        maxPoint -= 10;
    }
}); 


//function jugar para identificar cual jugador juega
function jugar(id){
    const celula = document.getElementById(id);
    //Un ternario para el check del turno 
     turno = checkTurno ? JUGADOR_X : JUGADOR_O;
    //Atribui el caracter en el ID celular dependiendo del turno
    celula.textContent = turno;
    //Definir de cual class es de cual jugador. Si es del jugador X o O . Osea seria una verificacion 
    celula.classList.add(turno);
    checkGanador(turno);
}



//Validador del ganador
function checkGanador(turno){
    //La funcion ".some" hace que percurar el array y si una de ellos es true la function es true
    const ganador = COMBINACIONES.some((comb) =>{
        return comb.every //Todo el array tiene que retornar true, si una retorna false todo va ser false
        ((index) =>{
            return celulas[index].classList.contains(turno);
        });
    });

    if(ganador){
        //Si hay un ganador la funcion activa
        endJuego(turno);
        //Si no un ganador termina el juego con empate
    } else if(checkEmpate()){
        endJuego();
    } else {
     //Cambiar el turno para el otro jugador
    checkTurno = !checkTurno;
    }
}

// ↓↓  Validar si las 9 posiciones fueron rellenas
function checkEmpate() {
    let x = 0;
    let o = 0;
    
//  Recorrer todas las celulas y si no hay la combinacion por parte de ni un jugador es empate
    for(index in celulas) {
        if(!isNaN(index)) {//Identificar los numeros para somar la posicion
        if(celulas[index].classList.contains(JUGADOR_X)){
            x++;
        }
        if(celulas[index].classList.contains(JUGADOR_O)){
            o++;
        }
    }
  }
  return x + o === 9 ? true : false;
}

//Si viene con parametro permanece la fuction del parametro si no permanece null
function endJuego(ganador = null){
    const pantallaMsj = document.getElementById("pantalla");
    //Elementos para la mensaje al final del juego
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    let msj = null;
 
    pantallaMsj.style.display = "block";
    pantallaMsj.appendChild(h2);
    pantallaMsj.appendChild(h3);


    /**
     * localStorage.set(nombreUsusario, maxPoint);
     */


    if(ganador){
        //console.log(`Ganador: ${ganador}`);
        h2.innerHTML = `El jugador <span> ${ganador} </span> Gano`;
    } else{
        //console.log("Empato");
        h2.innerHTML = "Empato"; 
    }

    let contador = 3;
    setInterval(() => {h3.innerHTML = `Reiniciando en ${contador--}`; }, 1000);

    setTimeout(() => location.reload(), 4000);


}