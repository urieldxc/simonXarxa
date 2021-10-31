const botonEmpezar = document.getElementById("botonEmpezar");

let botonRojo = document.getElementById("botonRojo");
let botonVerde = document.getElementById("botonVerde");
let botonAmarillo = document.getElementById("botonAmarillo");
let botonAzul = document.getElementById("botonAzul");

let arrayPC = [];
let arrayUsuario = [];
let nivel = 0;


function siguienteRonda(){
    nivel +=1;

    const siguienteSecuencia = [...arrayPC]
    siguienteSecuencia.push(siguientePaso);
}

function siguientePaso(){
    const colores = ["rojo","verde", "azul", "amarillo"]
    const valorRandom = colores[Math.floor(Math.random()*colores.length)];
    return valorRandom
}

function empezarJuego(){
    botonEmpezar.classList.add('hidden');
}






















botonEmpezar.addEventListener('click', empezarJuego);