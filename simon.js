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


/*AQUI EMPIEZA EL JUEGO, ES EL PASO n1 */

function empezarJuego(){
    eleccionPC();   
    turnoDelPC();

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

/*VIGILAR */


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
/*COLORES */

    function turnoDelPC(){
        arrayPC.forEach(e => {
            asignarColor(e);
            // quitarColor(e);
        })
    }


    function asignarColor(numero){
        if(numero == 1) botonRojo.classList.add("elegido");
        if(numero == 2) botonVerde.classList.add("elegido");
        if(numero == 3) botonAzul.classList.add("elegido");
        if(numero == 4) botonAmarillo.classList.add("elegido");
    }

    // function quitarColor(numero){
    //     if(numero == 1) botonRojo.classList.remove("elegido");
    //     if(numero == 2) botonVerde.classList.remove("elegido");
    //     if(numero == 3) botonAzul.classList.remove("elegido");
    //     if(numero == 4) botonAmarillo.classList.remove("elegido");
    // }


    function numeroRandom(){
        return Math.floor(Math.random()*(5-1))+1;
    }
    
    function eleccionPC(){
        arrayPC.push(numeroRandom());
    }
    
    
    function eleccionUsuario(){
        arrayUsuario.push(valorBoton);
    }
    
