let botonRojo = document.getElementById("botonRojo");
let botonVerde = document.getElementById("botonVerde");
let botonAmarillo = document.getElementById("botonAmarillo");
let botonAzul = document.getElementById("botonAzul");
let botonEmpezar = document.getElementById("botonEmpezar");
let botonComprobar = document.getElementById("botonComprobar");

let arrayPC = [];
let arrayUsuario = [];
let numeroTurnos = 1;
let valorBoton;

let caca;

/*TODO: Inicializar el programa con el botón start.*/ 

function empezarJuego(){
    eleccionPC();   
    turnoDelPC();
    /*TODO: crear una función para no repetir el código*/

    botonRojo.addEventListener("click", ()=>{
        valorBoton = 1;
        eleccionUsuario();

    })
    botonVerde.addEventListener("click", ()=>{
        valorBoton = 2;
        eleccionUsuario();

    })
    botonAzul.addEventListener("click", ()=>{
        valorBoton = 3;
        eleccionUsuario();

    })
    botonAmarillo.addEventListener("click", ()=>{
        valorBoton = 4;
        eleccionUsuario();

    })
}


function recorrerVectores(){
    for(let i = 0; i < numeroTurnos; i++){
        turnoDelPC();
        for(let a = 0; a < arrayPC.length; a++){
            turnoDelPC();
            comparacionElecciones(a);
            
        }
        eleccionPC();
    }
}

/* TODO: crear función para recorrer los vectores y señalar el color elegido por la máquina con
un delay entre cada lectura (mas adelante, ponerle sonidos)*/

function turnoDelPC(){
    arrayPC.forEach(e => {
        comprobarColor(e)
    })
}

/*Comprobar color boton y valor*/

function comprobarColor(numero){
    if(numero == 1) botonRojo.classList.add("elegido");
    if(numero == 2) botonVerde.classList.add("elegido");
    if(numero == 3) botonAzul.classList.add("elegido");
    if(numero == 4) botonAmarillo.classList.add("elegido");
}

/*1- El PC genera un número random*/

function numeroRandom(){
    return Math.floor(Math.random()*(5-1))+1;
}

/*2- Llama a numeroRandom() y lo sube al array*/
function eleccionPC(){
    caca = numeroRandom();
    arrayPC.push(caca);

}
/*3- Sube al array del usuario, el valor que le vamos a pasar haciendo click en 
alguno de los botones de colores*/

function eleccionUsuario(){
    arrayUsuario.push(valorBoton);
}

/*4- Comparar*/

function comparacionElecciones(i){
    if (arrayPC[i] == arrayUsuario[i]) alert("Has ganado");
    if (arrayPC[i] != arrayUsuario[i]) alert("Has perdido");
}



botonEmpezar.addEventListener("click", () =>{
    empezarJuego();
})

botonComprobar.addEventListener("click", () =>{
    recorrerVectores();
})

/*TODO: Empezar sin valor de ID para los botones y cuando se inicie mediante
el botón Empezar, asignarle los valores del ID para que puedan ser 
utilizados por los addEventListener*/



//---------------------------------------------------------

// function recorrerVectores(){
//     for(let i = 0; i < numeroTurnos; i++){
//         comparacionElecciones(i);
//         console.log(`Posición del array ${i}`);
//     }
// }
