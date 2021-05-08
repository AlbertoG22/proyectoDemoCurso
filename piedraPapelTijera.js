
var opciones = ["piedra", "papel", "tijera"];
var jugada = opciones[Math.floor(Math.random() * 3)];

//cambiar el segundo parámetro a elección
juegoIf(jugada, "piedra");

function juegoIf(jugada, mio){
    console.log("La máquina sacó " + jugada + " y tú " + mio)
    if(mio === jugada){
        console.log("Empate")
    } else{
        if(jugada === "piedra" && mio === "papel" || jugada === "tijera" && mio === "piedra" || jugada === "papel" && mio === "tijera"){
            console.log("Ganaste")
        } else {
            console.log("Perdiste")
        }
    }
}

//cambiar el segundo parámetro a elección
juegoSwitch(jugada, "piedra");

function juegoSwitch(jugada, mio){
    console.log("La máquina sacó " + jugada + " y tú " + mio)
    switch(true){
        case (jugada === mio):
            console.log("Empate")
            break;
        case (jugada === "piedra" && mio === "papel" || jugada === "tijera" && mio === "piedra" || jugada === "papel" && mio === "tijera"):
            console.log("Ganaste")
            break;
        default:
            console.log("Perdiste")
    }
}