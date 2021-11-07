const botonEmpezar = document.getElementById("botonEmpezar");

let botonRojo = document.getElementById("botonRojo");
let botonVerde = document.getElementById("botonVerde");
let botonAmarillo = document.getElementById("botonAmarillo");
let botonAzul = document.getElementById("botonAzul");
let contenedorCasilla = document.getElementById("contenedorCasilla");
let info = document.getElementById("info");

let arrayPC = [];
let arrayUsuario = [];
let nivel = 0;

function turnoUsuario(nivel) {
  contenedorCasilla.classList.remove('no-clicable');
  info.textContent = `Tu nivel: ${nivel} pulsación`;
}








function siguienteRonda(){
    nivel +=1;

    contenedorCasilla.classList.add('no-clicable');
    info.textContent = 'Espera tu turno...';
    // heading.textContent = `Level ${level} of 20`

    const siguienteSecuencia = [...arrayPC]
    siguienteSecuencia.push(siguientePaso());


    
    jugarRonda(siguienteSecuencia);

    arrayPC = [...siguienteSecuencia];
    setTimeout(()=>{
      turnoUsuario(nivel);
    }, nivel * 600 +1000);


}










function siguientePaso(){
    const colores = ["rojo","verde", "azul", "amarillo"]
    const valorRandom = colores[Math.floor(Math.random()*colores.length)];
    return valorRandom
}



function activarColor(color){
    const casilla = document.querySelector(`[data-tile='${color}']`);
    const sonido = document.querySelector(`[data-sound='${color}']`);

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

function empezarJuego(){
    botonEmpezar.classList.add('hidden');
    siguienteRonda();
}
botonEmpezar.addEventListener('click', empezarJuego);