  /*--------- ↓↓↓↓↓↓  TIC-TOC-TOE ↓↓↓↓↓↓ ---------*/

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
  
 
/*--------- ↑↑↑↑↑↑ TIC-TOC-TOE ↑↑↑↑↑↑ ---------*/

/*--------- ↓↓↓↓↓↓  Falling Ball ↓↓↓↓↓↓ ---------*/

    //ARRAY con palabras
let palabras = ["programador", "algoritmo", "javascript", "html", "css", "web", "frontend", "backend", "fullstack", "desenvolvimento", "aplicativo", "jogo", "software"];

//Variable para selecionar cualquier de las palabras del array. Con  Math.random() retorna un punto flotante entre 0 y 1. Y con Math Floor me retorna un entero despues multiplica con el length de la variable palabra que va retornar una posicion del array, osea la palabra elijida
let palabra = palabras[Math.floor(Math.random() * palabras.length)];

//Variable para oportunidades y aciertos 
let oportunidad = 6;
let aciertos = 0;

let imagem = 0;

let posicao;


for (posicao = 0; posicao < palabra.length; posicao++) {
    let span = document.createElement("i");
    span.setAttribute('id', posicao);

    let div = document.getElementById("palabra");
    div.appendChild(span);
}
//Variable para armarzenar las letras del alfabeto y otra para armarzenar las letras. Eso con split 
let alfabeto = "abcdefghijklmnopqrstuvwxyz";
let letras = alfabeto.split("");

//Percorrer variable letras con el for  creando "buttons"
for (posicao = 0; posicao < letras.length; posicao++) {
    let botao = document.createElement("button");
    let letra = document.createTextNode(letras[posicao]);
    
    botao.appendChild(letra);
    botao.setAttribute('onclick', 'escolheLetra(\''+letras[posicao]+'\')');
    botao.setAttribute('id', letras[posicao]);

    let div = document.getElementById("letras");
    div.appendChild(botao);
}

// function para elijir la letra 
function escolheLetra(letra) {

    let acertou = false; //si el usuario logro acertar la latra entrara en la condicion de abajo. Si no logro acertar la letra entra en otra condicion bajo esa

    // metado FOR para percorrer la variable palabras.
    for (posicao = 0; posicao < palabra.length; posicao++) {
        if (letra === palabra[posicao]) {
            let span = document.getElementById(posicao);
            let l = document.createTextNode(letra);

            span.appendChild(l);

            let botao = document.getElementById(letra);
            botao.setAttribute('class', 'certa');
            //remove el onclick para no elijir novamente la letra
            botao.removeAttribute('onclick');

            aciertos++;
            acertou = true;
        }
    }

//Si el usuario se equivoca la letra entra en esa condicion
    if (acertou === false) { 
        imagem++;
        document.getElementById("forca").src = "../IMG/ElAhorcado/forca-"+imagem+".jpg"; // concatenacion de la img 

        var botao = document.getElementById(letra);
        botao.setAttribute('class', 'errada');
        botao.removeAttribute('onclick');

        oportunidad--; //Baja las oportunidades 
    }

    //Se las oportunidades llega a 0 el jugador pierde
    if (oportunidad === 0) {
        let mensagem = document.createElement("p");
        let t1 = document.createTextNode("Perdiste!");
        mensagem.appendChild(t1);

        let botao = document.createElement("button");
        let t2 = document.createTextNode("jugar nuevamente");
        
        botao.appendChild(t2);
        botao.setAttribute('class', 'novo-bt');
        botao.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("novo");
        div.appendChild(mensagem);
        div.appendChild(botao);
    }

    if (aciertos === palabra.length) {
        let mensagem = document.createElement("p");
        let t1 = document.createTextNode("Ganaste!");
        mensagem.appendChild(t1);

        let botao = document.createElement("button");
        let t2 = document.createTextNode("jugar nuevamente");
        
        botao.appendChild(t2);
        botao.setAttribute('class', 'novo-bt');
        botao.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("novo");
        div.appendChild(mensagem);
        div.appendChild(botao);
    }
}
/*--------- ↑↑↑↑↑↑ Falling Ball ↑↑↑↑↑↑ ---------*/