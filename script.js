let intentos = 5;
let palabras = ["CINCO", "HOLAS","HOJAS"]
let palabra
window.addEventListener('load', init)
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}
const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);
const input = document.getElementById("guess-input");
const valor = input.value;
function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}
function intentar(){
    aleatorio()
    console.log(palabra)
    const GRID = document.getElementById("grid");
    const INTENTO = leerIntento()
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)

    }
    if (INTENTO == palabra){ 
        terminar ("<h1>GANASTE</h1>")
    }
    intentos--;
    if (intentos==0){
        terminar ("<h1>TE QUEDASTE SIN VIDA</h1>")
    }

    GRID.appendChild(ROW)

}
function aleatorio(){
    if (intentos==5){

    let i= Math.floor(Math.random() * 2) + 0;
    palabra= palabras[i]
    }
}

function terminar(mensaje){
    const BOTON= document.getElementById("guess-button");
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}