const botonEmpezar = document.getElementById("botonEmpezar");
const contenedorCasilla = document.querySelector(".js-contenedor");
const info = document.getElementById("info");
const cabecera = document.querySelector('.js-cabecera')
// const botonDificultad = document.querySelector('.botonDificultad');

const facil = document.getElementById("botonFacil");
const medio = document.getElementById("botonMedio");
const dificil = document.getElementById("botonDificil");

let arrayPC = [];
let arrayUsuario = [];
let nivel = 0;
let numeroTurnos = 3;


/*Por refactorizar, no hemos tenido tiempo.*/

facil.addEventListener("click", () =>{
  numeroTurnos = 10;
  console.log(numeroTurnos)
})
medio.addEventListener("click", () =>{
  numeroTurnos = 20;
  console.log(numeroTurnos)
})
dificil.addEventListener("click", () =>{
  numeroTurnos = 30;
  console.log(numeroTurnos)
})




function turnoUsuario(nivel) {
  contenedorCasilla.classList.remove('no-clicable');
  info.textContent = `Tu nivel: ${nivel} pulsación`;
}



function activarColor(color){
  const casilla = document.querySelector(`[data-casilla='${color}']`);
  const sonido = document.querySelector(`[data-sonido='${color}']`);

  casilla.classList.add("activado");
  sonido.play();

  setTimeout(()=>{
    casilla.classList.remove("activado");
  }, 300);

}

function jugarRonda(siguienteSecuencia) {
  siguienteSecuencia.forEach((color, indice) => {

    setTimeout(() => {
      activarColor(color);
    }, (indice + 1) * 600);
    
    
  });

}
function siguientePaso(){
  const colores = ["rojo","verde", "azul", "amarillo"]
  const valorRandom = colores[Math.floor(Math.random()*colores.length)];
  return valorRandom
}



function siguienteRonda(){
    nivel +=1;

    contenedorCasilla.classList.add('no-clicable');
    info.textContent = 'Espera tu turno...';
    cabecera.textContent = `Nivel ${nivel} de ${numeroTurnos}`

    const siguienteSecuencia = [...arrayPC]
    siguienteSecuencia.push(siguientePaso());


    
    jugarRonda(siguienteSecuencia);

    arrayPC = [...siguienteSecuencia];
    setTimeout(()=>{
      turnoUsuario(nivel);
    }, nivel * 600 +1000);


}

  function eleccionJugador(casilla){
    const indice = arrayUsuario.push(casilla) - 1;
    const sonido = document.querySelector(`[data-sonido='${casilla}']`);
    sonido.play();

    const pulsacionesRestantes = arrayPC.length - arrayUsuario.length;

    if(arrayUsuario[indice] !== arrayPC[indice]){
      resetearJuego("Ups, has perdido");
      return;
    }

    if (arrayUsuario.length === numeroTurnos) {
      resetearJuego('Felicidades, menuda memoria, te has pasado el juego, titán');
      return
    }

    if (arrayUsuario.length === arrayPC.length){
      arrayUsuario = [];
      info.textContent = 'Felicidades! Puedes continuar!';
      setTimeout(() => {
        siguienteRonda();
      }, 1000);
      
      return;
  }

  info.textContent = `Tu turno: ${pulsacionesRestantes} pulsaciones`;
}
  


function empezarJuego(){
    botonEmpezar.classList.add('hidden');
    info.classList.remove('hidden');
    info.textContent = 'Espera al PC'
    siguienteRonda();
    
}

botonEmpezar.addEventListener('click', empezarJuego);
contenedorCasilla.addEventListener('click', event => {
  const { casilla } = event.target.dataset;
  if (casilla) eleccionJugador(casilla);
})

function resetearJuego(texto){
  alert(texto);
  arrayPC=[];
  arrayUsuario=[];
  nivel = 0;
  botonEmpezar.classList.remove("hidden");
  cabecera.textContent = "Simon Xarxatec";
  info.classList.add("hidden");
  contenedorCasilla.classList.add("no-clicable")
}

