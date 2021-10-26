let botonRojo = document.getElementById("botonRojo");
let botonVerde = document.getElementById("botonVerde");
let botonAmarillo = document.getElementById("botonAmarillo");
let botonAzul = document.getElementById("botonAzul");
let botonEmpezar = document.getElementById("botonEmpezar");

let arrayPC = [];
let arrayUsuario = [];
let numeroTurnos = 1;
let valorBoton;

let caca;



eleccionPC();

//PRUEBA -------------------------------------------------

function recorrerVectores(){
    for(let i = 0; i < numeroTurnos; i++){
        for(let a = 0; a < arrayPC.length; a++){
            comparacionElecciones(a);
        }
        eleccionPC();
    }
}



//---------------------------------------------------------

// function recorrerVectores(){
//     for(let i = 0; i < numeroTurnos; i++){
//         comparacionElecciones(i);
//         console.log(`Posición del array ${i}`);
//     }
// }



function comparacionElecciones(i){
    if (arrayPC[i] == arrayUsuario[i]) alert("Has ganado");
    if (arrayPC[i] != arrayUsuario[i]) alert("Has perdido");
}



function numeroRandom(){
    return Math.floor(Math.random()*(5-1))+1;
}


function eleccionUsuario(){
    arrayUsuario.push(valorBoton);
}


function eleccionPC(){
    caca = numeroRandom();
    arrayPC.push(caca);

}




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

botonEmpezar.addEventListener("click", () =>{
    recorrerVectores();
})

/*TODO: Empezar sin valor de ID para los botones y cuando se inicie mediante
el botón Empezar, asignarle los valores del ID para que puedan ser 
utilizados por los addEventListener*/
